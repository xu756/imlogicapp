import { ChatTypeValue } from '@/typings/msg/enum';
export class WebSocketService {
  private ws: WebSocket | null = null;
  private readonly url: string;
  private sender: number;
  private heartbeatTimer: NodeJS.Timeout | null = null;
  public msgLogic(msg: Msg.Message): void {}
  constructor(
    url: string,
    sender: number,
    msgLogic: (msg: Msg.Message) => void,
  ) {
    this.url = url;
    this.msgLogic = msgLogic;
    this.sender = sender;
  }
  connect(): void {
    this.ws = new WebSocket(this.url);
    this.ws.onopen = () => {
      console.log('WebSocket connected');
      this.heartbeat();
    };
    this.ws.onmessage = (e) => {
      const data: Msg.Message = JSON.parse(e.data);
      if (
        data.chat_type === ChatTypeValue.SystemMessage &&
        data.content === 'pong'
      ) {
        return;
      }
      this.msgLogic(data);
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
        sender: this.sender,
        chat_type: ChatTypeValue.SystemMessage,
        timestamp: Date.now(),
        content: 'ping',
      });
    }, 10000);
  }
}
