import { defineConfig } from '@umijs/max';

export default defineConfig({
    antd: {},
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
            layout: false,
            component: '@/pages/Home',
            access: 'user',
        },
    ],
    npmClient: 'pnpm',
});
