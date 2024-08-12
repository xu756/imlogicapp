import { FolderAddFilled } from '@ant-design/icons';
import { Button, Col, Input, Row } from 'antd';
import { useState } from 'react';

interface IData {
  chat_id: number;
  sender: number;
  receiver: number;
}
const ChatInput = ({ chat_id, sender, receiver }: IData) => {
  const [text, setText] = useState<string>();
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
          <Button type="primary">发送</Button>
        </div>
      </Col>
    </Row>
  );
};

export default ChatInput;
