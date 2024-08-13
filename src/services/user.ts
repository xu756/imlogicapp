import { request } from '@umijs/max';

/**
 * 获取当前用户信息
 */
export const getUserInfo = async () => {
  return request<API.UserInfo>('/user/info', {
    method: 'POST',
  });
};

/**
 * 获取一个用户信息
 */

export const getUserOneInfo = async (params: API.GetOneReq) => {
  return request<API.UserInfo>('/user/oneInfo', {
    method: 'POST',
    data: params,
  });
};
