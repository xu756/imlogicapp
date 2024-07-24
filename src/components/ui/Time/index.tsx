import { Tag } from 'antd';
import dayjs from 'dayjs';

export default (prop: { time: string | undefined }) => {
  return <Tag>{dayjs(prop.time).fromNow()}</Tag>;
};
