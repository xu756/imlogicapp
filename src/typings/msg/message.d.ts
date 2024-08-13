declare namespace Msg {
  import { MsgType, ChatType } from './enum';

  /**
   * 消息
   */
  export type Message = {
    chat_id: number;
    chat_type: ChatType;
    group_id?: number;
    link_id?: string;
    msg_id: string;
    msg_meta?: MsgMeta;
    msg_type: MsgType;
    sender: number;
    receiver: number;
    timestamp: number;
    content: string;
    media: MediaType[];
  };

  /**
   * 消息内容
   *
   */
  // export type MsgContent = {
  //   audio?: AudioType;
  //   content?: string;
  //   file?: FileType;
  //   img?: ImageType[];
  //   video?: VideoType;
  // };

  /**
   * 媒体内容
   */
  export type MediaType = {
    uid: string;
    url: string;
  };

  //   /**
  //    * 音频
  //    */
  //   export type AudioType = {
  //     duration: number;
  //     uid: string;
  //     url: string;
  //   };
  //   /**
  //    * 文件
  //    */
  //   export type FileType = {
  //     uid: string;
  //     url: string;
  //   };
  //   /**
  //    * 视频
  //    */
  //   export type VideoType = {
  //     duration: number;
  //     uid: string;
  //     url: string;
  //   };
  //   /**
  //    * 消息元数据
  //    */
  export type MsgMeta = {
    detail: 'connect' | 'disconnect' | 'heartbeat';
    version: string;
  };
  //   /**
  //    * 图片
  //    */
  //   export type ImageType = {
  //     uid: string;
  //     url: string;
  //   };
}
