import { getUserOneInfo } from '@/services';
import { useMap } from 'ahooks';

export default () => {
  const [users, { set, get, remove, reset }] = useMap<number, API.UserInfo>();
  const getOneUser = async (id: number) => {
    let user = get(id);
    if (user == undefined) {
      try {
        user = await getUserOneInfo({ id });
        set(id, user);
      } catch (e) {
        console.error(e);
      }
    }
    return user;
  };
  return {
    getOneUser,
  };
};
