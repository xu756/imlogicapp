import { useModel } from '@umijs/max';
import { useMap, useUpdateEffect } from 'ahooks';
import MessageItem from '../Message';

const ChatList = () => {
  let chat_id = 2222;
  const { lastMsg } = useModel('chat', (model) => ({
    lastMsg: model.lastMsg,
  }));
  const [messges, { set }] = useMap<string, Msg.Message>([]);

  useUpdateEffect(() => {
    if (lastMsg.chat_id === chat_id) {
      set(lastMsg.msg_id, lastMsg);
    }
  }, [lastMsg]);
  return (
    <div className="chat-body">
      {Array.from(messges).map(([msg_id, msg]) => (
        <MessageItem key={msg.msg_id} {...msg} />
      ))}
    </div>
  );
};

export default ChatList;
