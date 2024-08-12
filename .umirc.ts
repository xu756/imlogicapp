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
      name: '聊天',
      path: '/home',
      component: '@/pages/Home',
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
      target: 'http://192.168.0.105/api/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
