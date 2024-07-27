import { useModel } from '@umijs/max';
import ChatFooter from './ChatFooter';
import ChatHeader from './ChatHeader';
import ChatList from './ChatList';
import './index.less';
import styles from './index.less';

const Chat = () => {
  const { initialState } = useModel('@@initialState');
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
