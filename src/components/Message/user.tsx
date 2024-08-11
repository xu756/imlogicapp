import { getUserInfo } from '@/services';
import { useMount, useSetState } from 'ahooks';
import { Avatar } from 'antd';

interface MessageUserProps {
  userId: number;
}
export const MessageUserAvatar = ({ userId }: MessageUserProps) => {
  const [userInfo, setUserInfo] = useSetState<API.UserInfo>({} as API.UserInfo);
  useMount(async () => {
    // 获取用户信息
    try {
      const res = await getUserInfo({ id: userId });
      setUserInfo(res);
    } catch (e) {
      console.error(e);
    }
  });
  return <Avatar src={userInfo.avatar} alt={userInfo.name} />;
};
