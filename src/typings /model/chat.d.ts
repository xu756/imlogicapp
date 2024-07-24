/**
 * 数据库表结构
 */
declare namespace Model {
  /**
   * 私聊聊天信息
   */
  export interface Chat {
    // id
    id: number;
    // 创建时间
    created_at: string;
    // 聊天uuid
    uuid: string;
    // 用户1 id
    user1_id: number;
    // 用户2 id
    user2_id: number;
  }
}
