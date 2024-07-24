import { ProFormUploadButton } from '@ant-design/pro-components';
import { useMount } from 'ahooks';

import { Image, Space, UploadProps } from 'antd';
import { useState } from 'react';
export default (props: Ui.UploadProps) => {
  useMount(() => {
    // console.log(props);
    props.setLoading?.(false);
  });
  const [imgUrl, setImgUrl] = useState(props.url);
  const beforeUpload: UploadProps['beforeUpload'] = () => {
    props.setLoading?.(true);
  };
  const onChange: UploadProps['onChange'] = ({ file }) => {
    switch (file.status) {
      case 'uploading':
        break;
      case 'done':
        console.log(file);
        file.url = file.response.data.url;
        file.thumbUrl = file.response.data.url;
        props.setUrl(file.url);
        setImgUrl(file.url);
        props.setLoading?.(false);
        break;
      case 'removed':
        props.setUrl('');
        break;
      case 'error':
        props.setLoading?.(false);
        break;
      default:
        break;
    }
  };
  const defaultFile: UploadProps['defaultFileList'] = [
    {
      uid: '1',
      name: '文件',
      status: 'done',
      url: props.url,
    },
  ];
  return (
    <Space align="start">
      <ProFormUploadButton
        max={1}
        rules={[{ required: true, message: '请上传图片' }]}
        fieldProps={{
          showUploadList: props.showUploadList || false,
          data: props.data,
          onChange,
          beforeUpload,
          listType: 'picture-card',
          defaultFileList: props.url === '' ? [] : defaultFile,
        }}
        action="/api/admin/file/update"
      />
      {imgUrl && (
        <Image src={imgUrl} width={props.width} height={props.height} />
      )}
    </Space>
  );
};
