import { message } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { getCookie } from './utils';

const token = getCookie('ImlogicToken');
if (
  location.pathname === '/login' ||
  localStorage.getItem('session_id') === null
) {
  const sessionId = uuidv4();
  localStorage.setItem('session_id', sessionId);
}
if (location.pathname !== '/login' && !token) {
  message.error('登录超时');

  window.location.href = '/login';
}
