import { useMap, useSetState } from 'ahooks';

// 全局共享数据示例
export default () => {
  let initMsg = new Map<string | number, Msg.Message>();
  const [lastMsg, setLastMsg] = useSetState<Msg.Message>({} as Msg.Message);
  // const [
  //   chatMsgs,
  //   { add: addChatMsg, remove: removeChatMsg, reset: resetChatMsg },
  // ] = useSet<Msg.Message>(initMsg);

  const [
    chatMsgs,
    { set: setChatMsgs, remove: removeChatMsg, reset: resetChatMsg },
  ] = useMap<string | number, Msg.Message>(initMsg);
  const newChatMsg = (msg: Msg.Message) => {
    setChatMsgs(msg.chat_id, msg);
    setLastMsg(msg);
  };
  return {
    chatMsgs,
    lastMsg,
    newChatMsg,
    removeChatMsg,
    resetChatMsg,
  };
};
