import { ChatType } from '@/typings/msg/enum';
import { useModel } from '@umijs/max';
import { useMap, useUpdateEffect } from 'ahooks';
import { useRef } from 'react';
import MessageItem from '../Message';
import ChatInput from './ChatInput';
interface IData {
  receiver: number;
  chat_id: number;
  group_id: number;
}
const ChatBody = ({ receiver, chat_id }: IData) => {
  const { lastMsg } = useModel('chat', (model) => ({
    lastMsg: model.lastMsg,
  }));
  const [messges, { set }] = useMap<string, Msg.Message>([]);
  const chatBodyRef = useRef<HTMLDivElement>(null);
  const { initialState } = useModel('@@initialState');
  const { sendMsg } = useModel('chat');

  useUpdateEffect(() => {
    if (lastMsg.chat_id === chat_id) {
      set(lastMsg.msg_id, lastMsg);
    }
  }, [lastMsg]);

  useUpdateEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messges]);
  const newChatMsg = (msg: Msg.Message) => {
    sendMsg(msg);
    set(msg.msg_id, msg);
  };
  return (
    <div className="chat-body">
      <div className="chat-message" ref={chatBodyRef}>
        {Array.from(messges).map(([msg_id, msg]) => (
          <MessageItem key={msg.msg_id} {...msg} />
        ))}
      </div>
      <div className="chat-line" />
      <div className="chat-input">
        <ChatInput
          sendMsg={newChatMsg}
          chat_type={ChatType.PrivateChat}
          chat_id={chat_id}
          sender={initialState?.user.id || 0}
          receiver={receiver}
        />
      </div>
    </div>
  );
};

export default ChatBody;
