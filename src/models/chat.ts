import { WebSocketService } from '@/services/ws';
import { useMap, useSetState } from 'ahooks';
import { useState } from 'react';

// 全局共享数据示例
export default () => {
  let initMsg = new Map<number, Msg.Message[]>();
  const [
    chatMsgs,
    {
      set: setChatMsgs,
      remove: removeChatMsg,
      reset: resetChatMsg,
      get: getChatMsgs,
    },
  ] = useMap<number, Msg.Message[]>(initMsg);
  const newChatMsg = (msg: Msg.Message) => {
    let msgs = getChatMsgs(msg.chat_id) || [];
    msgs.push(msg);
    setChatMsgs(msg.chat_id, msgs);
    setLastMsg(msg);
  };
  const [lastMsg, setLastMsg] = useSetState<Msg.Message>({} as Msg.Message);
  const [ws, swtWs] = useState<WebSocketService>();
  const connect = (url: string, user: number) => {
    if (ws === undefined) {
      const newws = new WebSocketService(url, newChatMsg);
      newws.connect();
      swtWs(newws);
    }
  };
  const disconnect = () => {
    ws?.disconnect();
  };
  const sendMsg = (msg: Msg.Message) => {
    ws?.send(msg);
  };
  return {
    chatMsgs,
    lastMsg,
    connect,
    sendMsg,
    disconnect,
    getChatMsgs,
    removeChatMsg,
    resetChatMsg,
  };
};
