import { MsgType } from '@/typings/msg/enum';

const MessageItem = (msg: Msg.Message) => {
  switch (msg.msg_type) {
    case MsgType.Text:
      return (
        <div key={msg.msg_id} className="chat-message" id={`msg-${msg.msg_id}`}>
          <div className="chat-sender">{msg.sender}</div>
          <div className="chat-text">{msg.content}</div>
          <div className="chat-timestamp">{msg.timestamp}</div>
        </div>
      );
    case MsgType.Image:
      return (
        <div key={msg.msg_id} className="chat-message" id={`msg-${msg.msg_id}`}>
          <div className="chat-sender">{msg.sender}</div>
          <img className="chat-image" src={msg.content} alt="chat-image" />
          <div className="chat-timestamp">{msg.timestamp}</div>
        </div>
      );
    default:
      return null;
  }
};

export default MessageItem;
