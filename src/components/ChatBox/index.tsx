import { ChatType } from '@/typings/msg/enum';
import { useModel } from '@umijs/max';
import { useMount } from 'ahooks';
import ChatBody from './ChatBody';
import ChatHeader from './ChatHeader';
import './index.less';
import styles from './index.less';
const Chat = () => {
  const { initialState } = useModel('@@initialState');
  const { connect } = useModel('chat');
  const receiver = 21474836484;
  const chat_id = 2222;
  const group_id = 0;
  const chat_type: ChatType = ChatType.PrivateChat;

  useMount(() => {
    if (initialState?.wsUrl) {
      // const ws = new WebSocketService(initialState?.wsUrl, 1111, newChatMsg);
      // ws.connect();
      connect(initialState?.wsUrl, 21474836482);
    }
  });
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <ChatHeader
          receiver={receiver}
          group_id={group_id}
          chat_type={chat_type}
        />
        <div className="chat-line" />
      </div>
      <div className={styles.body}>
        <ChatBody receiver={receiver} chat_id={chat_id} group_id={group_id} />
      </div>
    </div>
  );
};

export default Chat;
