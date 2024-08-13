import { ChatType } from '@/typings/msg/enum';
export class WebSocketService {
  private ws: WebSocket | null = null;
  private readonly url: string;
  private heartbeatTimer: NodeJS.Timeout | null = null;
  public msgLogic(msg: Msg.Message): void {}
  constructor(url: string, msgLogic: (msg: Msg.Message) => void) {
    this.url = url;
    this.msgLogic = msgLogic;
  }
  connect(): void {
    this.ws = new WebSocket(this.url);
    this.ws.onopen = () => {
      console.log('WebSocket connected');
      this.heartbeat();
    };
    this.ws.onmessage = (e) => {
      const data: Msg.Message = JSON.parse(e.data);
      switch (data.chat_type) {
        case ChatType.PrivateChat:
          this.msgLogic(data);
          break;
        case ChatType.GroupChat:
          this.msgLogic(data);
          break;
        case ChatType.SystemMessage:
          break;
        case ChatType.SystemNotice:
          break;
        default:
          console.log('Unknown message:', data);
          break;
      }
    };

    this.ws.onclose = () => {
      console.log('WebSocket disconnected');
    };
    this.ws.onerror = () => {
      console.log('WebSocket error');
    };
  }

  disconnect(): void {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }

  send(data: Msg.Message): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(data));
    } else {
      console.error('WebSocket is not connected');
      this.heartbeatTimer && clearInterval(this.heartbeatTimer);
    }
  }

  // 心跳检测
  heartbeat(): void {
    this.heartbeatTimer = setInterval(() => {
      this.send({
        chat_type: ChatType.SystemMessage,
        timestamp: Date.now(),
        content: 'ping',
      } as Msg.Message);
    }, 60000);
  }
}
