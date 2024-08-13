import { delCookie } from '@/utils';
import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { history, useModel } from '@umijs/max';
import type { MenuProps } from 'antd';
import { Avatar, Button, Dropdown, Space } from 'antd';
import styles from './index.less';
export default () => {
  const { initialState } = useModel('@@initialState');

  const logout = () => {
    delCookie('ImlogicToken');
    history.push('/login');
  };
  const items: MenuProps['items'] = [
    {
      key: 'center',
      icon: <UserOutlined />,
      label: '个人中心',
      onClick: () => history.push('/user/center'),
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: '个人设置',
      onClick: () => history.push('/user/setting'),
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
      onClick: logout,
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomLeft">
      <Button type="text" block className={styles.btn}>
        <Space size={10} direction="vertical">
          <Avatar src={initialState?.user?.avatar} alt="avatar" />
        </Space>
      </Button>
    </Dropdown>
  );
};
