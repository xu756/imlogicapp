import { Avatar, Button, Space } from 'antd';
import './index.less';

interface IData {
  username?: string;
  avatar?: string;
  online?: boolean;
}

const ChatHeader = (proop: IData) => {
  return (
    <div className="chat-header">
      <div className="chat-header-user">
        <Avatar size="small" src={proop.avatar} />
        <div className="chat-header-user-info">
          <div className="chat-header-user-info-name">{proop.username}</div>
          <div className="chat-header-user-info-online">
            {proop.online ? (
              <Space>
                <span className="chat-header-user-info-online-icon"></span>
                <span>在线</span>
              </Space>
            ) : (
              <Space>
                <span className="chat-header-user-info-unline-icon"></span>
                <span>离线</span>
              </Space>
            )}
          </div>
        </div>
      </div>
      <Button type="primary">Chat</Button>
    </div>
  );
};

export default ChatHeader;
