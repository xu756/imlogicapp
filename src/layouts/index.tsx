import { Outlet } from '@umijs/max';
import { useMount } from 'ahooks';
import { QuestionCircleOutlined } from '@ant-design/icons';

import { PageContainer } from '@ant-design/pro-components';
import { history,useAccess,useLocation } from '@umijs/max';
import { message,FloatButton, Button } from 'antd';


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
            style={{
                padding: 0,
                margin: 0,
                minHeight: 'calc(100vh - 56px)',
            }}
            header={{
                extra:[
                    <Button key="1" type="primary">新建</Button>,
                ]
            }}
        >
            <FloatButton tooltip="点击反馈" href='#' target="_blank" icon={<QuestionCircleOutlined />} type="primary" style={{ right: 24 }} />
            <Outlet />
        </PageContainer>
    );
};