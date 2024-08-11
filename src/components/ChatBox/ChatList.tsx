import { useModel } from '@umijs/max';

const ChatList = () => {
  const { chatMsgs, lastMsg } = useModel('chat', (model) => ({
    chatMsgs: model.chatMsgs,
    lastMsg: model.lastMsg,
  }));
  return (
    <div className="chat-body">
      {Array.from(chatMsgs.entries()).map(([msg_id, msg]) => (
        <div key={msg.msg_id} className="chat-message" id={`msg-${msg_id}`}>
          <div className="chat-sender">{msg.sender}</div>
          <div className="chat-text">{msg.content}</div>
          <div className="chat-timestamp">{msg.timestamp}</div>
        </div>
      ))}
      {JSON.stringify(lastMsg)}
    </div>
  );
};

export default ChatList;
