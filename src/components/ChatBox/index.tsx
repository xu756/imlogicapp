import { WebSocketService } from '@/services/ws';
import { useModel } from '@umijs/max';
import { useMount } from 'ahooks';
import ChatFooter from './ChatFooter';
import ChatHeader from './ChatHeader';
import ChatList from './ChatList';
import './index.less';
import styles from './index.less';
const Chat = () => {
  const { initialState } = useModel('@@initialState');
  const { newChatMsg } = useModel('chat');

  useMount(() => {
    if (initialState?.wsUrl) {
      const ws = new WebSocketService(initialState?.wsUrl, 1111, newChatMsg);
      ws.connect();
    }
  });
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <ChatHeader username={initialState?.name} avatar={initialState?.logo} />
        <div className="chat-line" />
      </div>
      <div className={styles.content}>
        <ChatList />
      </div>
      <div className={styles.footer}>
        <div className="chat-line" />
        <ChatFooter />
      </div>
    </div>
  );
};

export default Chat;
