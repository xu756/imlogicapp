import { MsgType } from '@/typings/msg/enum';
import { useModel } from '@umijs/max';
import { MessageUserAvatar } from './user';
const MessageItem = (msg: Msg.Message) => {
  const { initialState } = useModel('@@initialState');

  switch (msg.msg_type) {
    case MsgType.Text:
      return (
        <div
          key={msg.msg_id}
          className={`chat-message-item chat-message-item-${initialState?.user?.id === msg.sender ? 'right' : 'left'}`}
          id={`msg-${msg.msg_id}`}
        >
          <div className="chat-message-item-sender">
            <MessageUserAvatar userId={msg.sender} />
          </div>
          <div className="chat-message-item-content">{msg.content}</div>
        </div>
      );
    default:
      return null;
  }
};

export default MessageItem;
