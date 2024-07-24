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
        // uuid
        uuid: string;
    // 修改人
    editor: number;

    // 姓名
    username: string;
    // 密码
    password: string;
    // 手机号
    mobile: string;
    // 头像
    avatar: string;
    // 描述
    desc:string;
  }
  
}
