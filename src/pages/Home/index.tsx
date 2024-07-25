import { PageContainer } from '@ant-design/pro-components';
import { useAccess } from '@umijs/max';
import { useMount } from 'ahooks';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

export default () => {
  const access = useAccess();

  useMount(() => {
    console.log(access);
  });

  return (
    <PageContainer
      header={{
        title: false,
      }}
    >
      <PanelGroup autoSaveId="example" direction="horizontal">
        <Panel defaultSize={25}>1</Panel>
        <PanelResizeHandle />
        <Panel>2</Panel>
        <PanelResizeHandle />
        <Panel defaultSize={25}>3</Panel>
      </PanelGroup>
    </PageContainer>
  );
};
