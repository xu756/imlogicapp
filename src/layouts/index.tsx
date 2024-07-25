import { Outlet } from '@umijs/max';
import { Layout } from 'antd';

export default () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
