import { ChatType, MsgType } from '@/typings/msg/enum';
import { FolderAddFilled } from '@ant-design/icons';
import { Button, Col, Input, Row } from 'antd';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface IData {
  chat_id: number;
  chat_type: ChatType;
  sender: number;
  receiver: number;
  sendMsg: (msg: Msg.Message) => void;
}

const ChatInput = ({
  chat_id,
  sender,
  receiver,
  chat_type,
  sendMsg,
}: IData) => {
  const [text, setText] = useState<string>('你好');
  const newTextMsg = (text: string) => {
    return {
      chat_id,
      chat_type,
      group_id: 0,
      msg_id: uuidv4(),
      msg_type: MsgType.Text,
      sender,
      receiver,
      content: text,
      timestamp: Date.now(),
      media: [],
    } as Msg.Message;
  };

  const OnSendMsg = () => {
    if (!text) {
      return;
    }
    sendMsg(newTextMsg(text));
  };
  return (
    <Row wrap={false}>
      <Col flex="none">
        <div className="chat-input-emoji">
          <Button shape="circle" type="primary" icon={<FolderAddFilled />} />
        </div>
      </Col>
      <Col flex="auto">
        <Input.TextArea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="请输入消息"
          autoSize={{ minRows: 1, maxRows: 3 }}
        />
      </Col>
      <Col flex="none">
        <div className="chat-input-send">
          <Button type="primary" onClick={OnSendMsg}>
            发送
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default ChatInput;
