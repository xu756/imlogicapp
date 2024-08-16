import { MsgType } from '@/typings/msg/enum';
import { useModel } from '@umijs/max';
import { Image } from 'antd';
import dayjs from 'dayjs';

import { MessageUserAvatar } from './user';
const MessageItemContent = (msg: Msg.Message) => {
  switch (msg.msg_type) {
    case MsgType.Text:
      return (
        <div className="chat-message-item-content-text">{msg.content}</div>
      );

    case MsgType.Image:
      return (
        <div className="chat-message-item-content-image">
          <div className="chat-message-item-content-image-text">
            {msg.content}
          </div>
          <Image.PreviewGroup>
            {msg.media.map((img, index) => {
              return <Image key={index} width={200} src={img.url} />;
            })}
          </Image.PreviewGroup>
        </div>
      );
    default:
      return null;
  }
};

const MessageItem = (msg: Msg.Message) => {
  const { initialState } = useModel('@@initialState');

  return (
    <div
      key={msg.msg_id}
      className={`chat-message-item chat-message-item-${initialState?.user?.id === msg.sender ? 'right' : 'left'}`}
      id={`msg-${msg.msg_id}`}
    >
      <div className="chat-message-item-sender">
        <MessageUserAvatar userId={msg.sender} />
      </div>
      <div className="chat-message-item-content">
        <MessageItemContent {...msg} />
        <div className="chat-message-item-content-time">
          {dayjs(msg.timestamp).format('YYYY-MM-DD HH:mm:ss')}
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
