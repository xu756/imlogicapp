import { useModel } from '@umijs/max';
import MessageItem from '../Message.tsx';

const ChatList = () => {
  let chat_id = 2222;
  const { getChatMsgs } = useModel('chat', (model) => ({
    getChatMsgs: model.getChatMsgs,
  }));
  return (
    <div className="chat-body">
      {getChatMsgs(chat_id)?.map((msg) => (
        <MessageItem key={msg.msg_id} {...msg} />
      ))}
      {JSON.stringify(getChatMsgs(chat_id))}
    </div>
  );
};

export default ChatList;
