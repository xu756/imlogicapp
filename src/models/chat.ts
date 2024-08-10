import { useSet, useSetState } from 'ahooks';

// 全局共享数据示例
export default () => {
  const initMsg: Msg.Message[] = [];
  const [lastMsg, setLastMsg] = useSetState<Msg.Message>({} as Msg.Message);
  const [
    chatMsgs,
    { add: addChatMsg, remove: removeChatMsg, reset: resetChatMsg },
  ] = useSet<Msg.Message>(initMsg);

  const newChatMsg = (msg: Msg.Message) => {
    addChatMsg(msg);
    setLastMsg({
      chat_id: 11,
      chat_type: msg.chat_type,
      group_id: msg.group_id,
      link_id: msg.link_id,
      msg_id: msg.msg_id,
      msg_meta: msg.msg_meta,
      msg_type: msg.msg_type,
      sender: msg.sender,
      receiver: msg.receiver,
      timestamp: msg.timestamp,
      content: msg.content,
      media: msg.media,
    });
  };
  return {
    chatMsgs,
    lastMsg,
    newChatMsg,
    removeChatMsg,
    resetChatMsg,
  };
};
