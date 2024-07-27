/**
 * 数据库表结构
 */
declare namespace Model {
  /**
   * 私聊聊天记录
   */
  export interface Message {
    // 私聊id
    chat_id: number;
    // 消息类型
    msg_type: number;
    // 消息id
    msg_id: number;
    // 发送者id
    sender_id: number;
    // timestamp
    timestamp: number;
    // 消息内容
    content: string;
  }
}
