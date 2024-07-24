declare namespace API {
  /**
   * 登录接口请求参数
   *
   */
  interface LoginReq {
    username?: string;
    password?: string;
    code?: string;
    mobile?: string;
    catcha?: string;
    session_id?: string;
    [property: string]: any;
  }
  /**
   * 登录接口返回参数
   * @param token 登录凭证
   * @param expire 过期时间
   */
  interface LoginRes {
    token: string;
    expire: number;
  }
  /*
   * 用户权限
   */
  export type UserAccess = Map<string, boolean>;
}
