declare namespace Msg {
  /**
   * 消息
   */
  export type Message = {
    chat_id: number;
    chat_type: ChatType;
    group_id: number;
    link_id: string;
    msg_content: MsgContent;
    msg_id: string;
    msg_meta?: MsgMeta;
    msg_type: MsgType;
    sender: number;
    timestamp: number;
  };
  /**
   * 消息类型
   * 0: 文本
   * 1: 图片
   * 2: 文件
   * 3: 音频
   * 4: 视频
   */
  export const enum MsgType {
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
  export const enum ChatType {
    PrivateChat = 0,
    GroupChat = 1,
    SystemMessage = 2,
    SystemNotice = 3,
  }
  /**
   * 消息内容
   *
   */
  export type MsgContent = {
    audio?: AudioType;
    content?: string;
    file?: FileType;
    img?: ImageType[];
    video?: VideoType;
  };
  /**
   * 音频
   */
  export type AudioType = {
    duration: number;
    uid: string;
    url: string;
  };
  /**
   * 文件
   */
  export type FileType = {
    uid: string;
    url: string;
  };
  /**
   * 视频
   */
  export type VideoType = {
    duration: number;
    uid: string;
    url: string;
  };
  /**
   * 消息元数据
   */
  export type MsgMeta = {
    detail: 'connect' | 'disconnect' | 'heartbeat';
    version: string;
  };
  /**
   * 图片
   */
  export type ImageType = {
    uid: string;
    url: string;
  };
}
