import { defineConfig } from '@umijs/max';

export default defineConfig({
    antd: {
        

    },
    access: {},
    model: {},
    initialState: {},
    request: {},
    layout: {},
    routes: [
        {
            path: '/',
            redirect: '/home',
            layout: false,
        },
        {
            name: '首页',
            path: '/home',
            component: '@/pages/Home',
            access: 'user',
        },
        {
            name: '聊天',
            path: '/chat',
            component: '@/pages/Chat',
            access: 'user',
        },
    ],
    npmClient: 'pnpm',
});
