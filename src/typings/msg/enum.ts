/**
 * 消息类型
 * 0: 文本
 * 1: 图片
 * 2: 文件
 * 3: 音频
 * 4: 视频
 */
export enum MsgTypeValue {
  Text = 0,
  Image = 1,
  File = 2,
  Audio = 3,
  Video = 4,
}

/**
 * 聊天类型
 * 0: 私聊
 * 1: 群聊
 * 2: 系统消息
 * 3: 系统通知
 */
export enum ChatTypeValue {
  PrivateChat = 0,
  GroupChat = 1,
  SystemMessage = 2,
  SystemNotice = 3,
}
