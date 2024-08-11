import { request } from '@umijs/max';

/**
 * 获取一个用户信息
 */
export const getUserInfo = async (params: API.GetOneReq) => {
  return request<API.UserInfo>('/user/info', {
    method: 'POST',
    data: params,
  });
};
