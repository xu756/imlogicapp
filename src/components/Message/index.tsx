import { MsgType } from '@/typings/msg/enum';
import './index.less';
import { MessageUserAvatar } from './user';
const MessageItem = (msg: Msg.Message) => {
  switch (msg.msg_type) {
    case MsgType.Text:
      return (
        <div key={msg.msg_id} className="chat-message" id={`msg-${msg.msg_id}`}>
          <div className="chat-message-sender">
            <MessageUserAvatar userId={msg.sender} />
          </div>
          <div className="chat-message-content">{msg.content}</div>
        </div>
      );
    default:
      return null;
  }
};

export default MessageItem;
