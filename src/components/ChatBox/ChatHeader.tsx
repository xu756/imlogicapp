import { ChatType } from '@/typings/msg/enum';
import { useModel } from '@umijs/max';
import { useMount, useSetState } from 'ahooks';
import { Avatar, Button, Space } from 'antd';

interface IData {
  chat_type: ChatType;
  receiver: number;
  group_id: number;
}

const ChatHeader = ({ receiver }: IData) => {
  const [userInfo, setUserInfo] = useSetState<API.UserInfo>({} as API.UserInfo);
  const { getOneUser } = useModel('user');
  useMount(async () => {
    // 获取用户信息
    try {
      const res = await getOneUser(receiver);
      if (res) {
        setUserInfo(res);
      }
    } catch (e) {
      console.error(e);
    }
  });

  return (
    <div className="chat-header">
      <div className="chat-header-user">
        <Avatar size="small" src={userInfo.avatar} />
        <div className="chat-header-user-info">
          <div className="chat-header-user-info-name">{userInfo.username}</div>
          <div className="chat-header-user-info-online">
            {userInfo.online ? (
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
