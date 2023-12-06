import { Outlet } from '@umijs/max';
import { useMount } from 'ahooks';
import { QuestionCircleOutlined } from '@ant-design/icons';

import { PageContainer } from '@ant-design/pro-components';
import { history,useAccess,useLocation } from '@umijs/max';
import { message,FloatButton } from 'antd';


const LoginPath = '/login';
export default () => {
    const access = useAccess();
    const location = useLocation();
    useMount(() => {
        if(!access.user&&location.pathname!==LoginPath){
            message.error('请先登录');
            history.push(LoginPath);
        }
    });
    return (
        <PageContainer 
            header={{
                title: '',
            }}
        >
            <FloatButton tooltip="点击反馈" href='https://s1zt69w7hzv.feishu.cn/share/base/form/shrcns0R7BfGGW75OfZnOAX13eg' target="_blank" icon={<QuestionCircleOutlined />} type="primary" style={{ right: 24 }} />
            <Outlet />
        </PageContainer>
    );
};