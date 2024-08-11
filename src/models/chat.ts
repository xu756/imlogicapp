import { useMap, useSetState } from 'ahooks';

// 全局共享数据示例
export default () => {
  let initMsg = new Map<number, Msg.Message[]>();
  const [lastMsg, setLastMsg] = useSetState<Msg.Message>({} as Msg.Message);
  // const [
  //   chatMsgs,
  //   { add: addChatMsg, remove: removeChatMsg, reset: resetChatMsg },
  // ] = useSet<Msg.Message>(initMsg);

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
    // setChatMsgs(msg.chat_id, msg);
    // setLastMsg(msg);
    // 获取当前聊天记录
    let msgs = getChatMsgs(msg.chat_id) || [];
    msgs.push(msg);
    setChatMsgs(msg.chat_id, msgs);
    setLastMsg(msg);
  };
  return {
    chatMsgs,
    lastMsg,
    newChatMsg,
    getChatMsgs,
    removeChatMsg,
    resetChatMsg,
  };
};
