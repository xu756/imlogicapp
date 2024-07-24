/**
 * 数据库表结构
 */
declare namespace Model {
  /**
   * 用户信息
   */
  export interface User {
    // id
    id: number;
    // 创建时间
    created_at: string;
    // 更新时间
    updated_at: string;
    // 删除状态
    deleted: boolean;
    // 修改人
    editor: number;
    // // 微信openid
    // wx_openid: string;
    // // 头条openid
    // tt_openid: string;
    // 姓名
    username: string;
    // 密码
    password: string;
    // 手机号
    mobile: string;
    // 头像
    avatar: string;
  }
  /**
   * 轮播图
   */
  export interface Banner {
    // id
    id: number;
    // 标题
    title: string;
    // 创建时间
    created_at?: string;
    // 更新时间
    updated_at?: string;
    // 删除状态
    deleted?: boolean;
    // 修改人
    editor?: number;
    // 图片地址
    image: ImageType[];
    // 跳转地址
    path?: string;
    // 跳转地址类型
    path_type?: MiniPathType;
    // 排序
    sort?: number;
  }
  /**
   * 跳转地址
   */
  type MiniPathType =
    | 'redirectTo'
    | 'switchTab'
    | 'reLaunch'
    | 'navigateTo'
    | '#';

  interface ImageType {
    uid: string;
    name: string;
    url: string;
    name: string;
    thumbUrl: string;
  }
}
