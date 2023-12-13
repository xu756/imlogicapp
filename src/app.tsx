import { RunTimeLayoutConfig } from '@umijs/max';
import {InitData} from '@/services/init_state';
export async  function getInitialState() {
    return await InitData();
}
const RightContent = () => {
    return <>right</>;
};

export const layout: RunTimeLayoutConfig = () => {
    return {
        title: 'im聊天',
        logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
        menu: {
            locale: false,
            type: 'group',
        },
        layout: 'top',
        siderWidth: 100,
        collapsedButtonRender: false,
        rightContentRender: () => <RightContent />,
        // footerRender: () => <div>footer</div>,
        // headerContentRender: () => <>header</>,
        token: {
            
            sider:{
                paddingInlineLayoutMenu: 0,
            },
            pageContainer:{
                paddingBlockPageContainerContent:0,
                marginInlinePageContainerContent:0,
                paddingInlinePageContainerContent:10,
            }
        },
    
    };
};
