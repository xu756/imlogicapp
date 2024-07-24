import { request } from '@umijs/max';
/**
 * 账号密码登录
 */
export const accountLogin = async (params: API.LoginReq) => {
  return request<API.LoginRes>('/login/account', {
    method: 'POST',
    data: params,
  });
};

/**
 * 手机验证码登录
 */
export const mobileLogin = async (params: API.LoginReq) => {
  return request<API.LoginRes>('/login/mobile', {
    method: 'POST',
    data: params,
  });
};

/**
 * 获取验证码
 */
export const getCaptcha = async () => {
  return request('/login/captcha', {
    method: 'POST',
  });
};

/**
 * 获取用户权限
 */
export const getUserAccess = async () => {
  return request<API.UserAccess>('/login/access', {
    method: 'POST',
  });
};
