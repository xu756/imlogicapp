import { DEFAULT_LOGO, DEFAULT_TITLE } from '@/constants';
import { getUserAccess } from '@/services';
import { RequestConfig } from '@@/plugin-request/request';
import { history, RunTimeLayoutConfig } from '@umijs/max';
import { message } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn'; // 导入本地化语言
import relativeTime from 'dayjs/plugin/relativeTime'; // 导入插件
import { v4 as uuidv4 } from 'uuid';
import RightContent from './layouts/components/RightContent';
import { delCookie, getCookie } from './utils';
dayjs.extend(relativeTime); // 使用插件
dayjs.locale('zh-cn'); // 使用本地化语言
export async function getInitialState() {
  const token = getCookie('ImlogicToken');
  if (
    history.location.pathname === '/login' ||
    localStorage.getItem('session_id') === null
  ) {
    const sessionId = uuidv4();
    localStorage.setItem('session_id', sessionId);
  }
  if (history.location.pathname !== '/login' && !token) {
    history.push('/login');
    message.error('登录超时');
    console.log(document.cookie);
    return {};
  }
  let access = {};
  if (history.location.pathname !== '/login') {
    await getUserAccess()
      .then((res) => {
        access = res;
      })
      .catch((e) => {
        delCookie('ImlogicToken');
      });
  }
  return {
    access: access,
  };
}

export const layout: RunTimeLayoutConfig = () => {
  return {
    title: DEFAULT_TITLE,
    logo: <img src={DEFAULT_LOGO} alt="logo" style={{ width: 30 }} />,
    menu: {
      locale: false,
    },
    contentWidth: 'Fluid',
    fixedHeader: false,
    fixSiderbar: true,
    colorWeak: false,
    layout: 'mix',
    siderWidth: 200,
    rightContentRender: RightContent,
    waterMarkProps: {
      content: [DEFAULT_TITLE, '管理员'],
    },
    token: {},
  };
};
interface ResponseStructure {
  success: boolean;
  data?: any;
  errorCode?: number;
  errorMessage?: string;
  timestamp?: number;
}

export const request: RequestConfig = {
  timeout: 3000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json; charset=utf-8',
  },
  // 请求拦截器
  requestInterceptors: [
    (config: any) => {
      // cookie 读取token
      const jwt = getCookie('ImlogicToken');
      config.url = '/api/admin' + config.url;
      config.headers.Authorization = jwt;
      return config;
    },
  ],
  errorConfig: {
    errorHandler: (error: any) => {
      const { errorCode, errorMessage } = error;

      switch (errorCode) {
        case 201:
          message.error({
            content: '参数错误，请检查参数',
          });
          break;
        case 202:
          message.error({
            content: '系统错误，请联系管理员',
          });
          break;
        case 203:
          message.error({
            content: '无权限，请重新登录',
          });
          delCookie('ImlogicToken');
          history.push('/login');
          break;
        case 204:
          message.warning({
            content: errorMessage,
          });
          break;
        default:
          message.error({
            content: errorMessage || '系统错误，请联系管理员',
          });
          break;
      }
    },
  },
  // 响应拦截器
  responseInterceptors: [
    (response: any) => {
      // 拦截响应数据，进行个性化处理
      const data: ResponseStructure = response.data;
      if (data.success) {
        return response.data;
      }
      throw response.data;
    },
  ],
};
