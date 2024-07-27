import { useModel } from '@umijs/max';
import { Layout } from 'antd';
import ChatFooter from './ChatFooter';
import ChatHeader from './ChatHeader';
import ChatList from './ChatList';
const { Header, Footer, Content } = Layout;
const Chat = () => {
  const { initialState } = useModel('@@initialState');
  return (
    <Layout className="h100">
      <Header>
        <ChatHeader username={initialState?.name} avatar={initialState?.logo} />
        <div className="chat-line" />
      </Header>
      <Content>
        <ChatList />
      </Content>
      <Footer>
        <ChatFooter />
      </Footer>
    </Layout>
  );
};

export default Chat;
