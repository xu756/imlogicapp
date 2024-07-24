import { PageContainer, StatisticCard } from '@ant-design/pro-components';
import { useAccess } from '@umijs/max';
import { useMount } from 'ahooks';
import { Button } from 'antd';
import { useState } from 'react';

const { Statistic, Divider } = StatisticCard;

export default () => {
  const access = useAccess();
  const [responsive, setResponsive] = useState(false);

  useMount(() => {
    console.log(access);
  });

  return (
    <PageContainer
      header={{
        title: '首页',
      }}
      extra={[
        <Button key="3">操作</Button>,
        <Button key="2">操作</Button>,
        <Button key="1" type="primary">
          主操作
        </Button>,
      ]}
      footer={[
        <Button key="rest">重置</Button>,
        <Button key="submit" type="primary">
          提交
        </Button>,
      ]}
    >
      <StatisticCard.Group direction={responsive ? 'column' : 'row'}>
        <StatisticCard
          statistic={{
            title: '总流量(人次)',
            value: 601986875,
          }}
        />
        <Divider type={responsive ? 'horizontal' : 'vertical'} />
        <StatisticCard
          statistic={{
            title: '付费流量',
            value: 3701928,
            description: <Statistic title="占比" value="61.5%" />,
          }}
          chart={
            <img
              src="https://gw.alipayobjects.com/zos/alicdn/ShNDpDTik/huan.svg"
              alt="百分比"
              width="100%"
            />
          }
          chartPlacement="left"
        />
        <StatisticCard
          statistic={{
            title: '免费流量',
            value: 1806062,
            description: <Statistic title="占比" value="38.5%" />,
          }}
          chart={
            <img
              src="https://gw.alipayobjects.com/zos/alicdn/6YR18tCxJ/huanlv.svg"
              alt="百分比"
              width="100%"
            />
          }
          chartPlacement="left"
        />
      </StatisticCard.Group>
    </PageContainer>
  );
};
