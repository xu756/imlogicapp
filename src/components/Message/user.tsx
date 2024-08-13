import { useModel } from '@umijs/max';
import { useMount, useSetState } from 'ahooks';
import { Avatar } from 'antd';

interface MessageUserProps {
  userId: number;
}
export const MessageUserAvatar = ({ userId }: MessageUserProps) => {
  const [userInfo, setUserInfo] = useSetState<API.UserInfo>({} as API.UserInfo);
  const { getOneUser } = useModel('user');
  useMount(async () => {
    // 获取用户信息
    try {
      const res = await getOneUser(userId);
      if (res) {
        setUserInfo(res);
      }
    } catch (e) {
      console.error(e);
    }
  });
  return <Avatar shape="square" src={userInfo.avatar} alt={userInfo.name} />;
};
