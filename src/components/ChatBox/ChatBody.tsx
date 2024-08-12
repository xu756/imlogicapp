import { useModel } from '@umijs/max';
import { useMap, useUpdateEffect } from 'ahooks';
import { useRef } from 'react';
import MessageItem from '../Message';
import ChatInput from './ChatInput';

const ChatBody = () => {
  let chat_id = 2222;
  const { lastMsg } = useModel('chat', (model) => ({
    lastMsg: model.lastMsg,
  }));
  const [messges, { set }] = useMap<string, Msg.Message>([]);
  const chatBodyRef = useRef<HTMLDivElement>(null);

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
  return (
    <div className="chat-body">
      <div className="chat-messages" ref={chatBodyRef}>
        {Array.from(messges).map(([msg_id, msg]) => (
          <MessageItem key={msg.msg_id} {...msg} />
        ))}
      </div>
      <div className="chat-line" />
      <div className="chat-input">
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatBody;
