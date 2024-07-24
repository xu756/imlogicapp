import { QuestionCircleOutlined } from '@ant-design/icons';
import { Outlet } from '@umijs/max';

import { FloatButton, Layout } from 'antd';
export default () => {
  return (
    <Layout>
      <FloatButton
        tooltip="点击反馈"
        href="https://s1zt69w7hzv.feishu.cn/share/base/form/shrcns0R7BfGGW75OfZnOAX13eg"
        target="_blank"
        icon={<QuestionCircleOutlined />}
        type="primary"
        style={{ right: 24, bottom: 100 }}
      />
      <Outlet />
    </Layout>
  );
};
