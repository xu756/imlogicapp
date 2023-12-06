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
        title: '低代码',
        logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
        menu: {
            locale: false,
        },
        layout: 'mix',
        fixSiderbar: true,
        siderWidth: 200,
        rightContentRender: () => <RightContent />,
        // footerRender: () => <Footer />,
        token: {},
    };
};
