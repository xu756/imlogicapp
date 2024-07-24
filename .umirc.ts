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
      component: '@/pages/Home',
    },
    {
      name: '聊天',
      path: '/chat',
      component: '@/pages/Chat',
    },
    {
      name: '登录',
      path: '/login',
      component: '@/pages/Login',
      layout: false,
    },
  ],
  npmClient: 'pnpm',
  // /api 会被代理到 http://
  proxy: {
    '/api': {
      target: 'https://dev.imlogic.cn/api/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
