import { PageContainer } from '@ant-design/pro-components';
import { useAccess } from '@umijs/max';
import { useMount } from 'ahooks';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import styles from './index.less';
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
        <Panel minSize={25}>1</Panel>
        <PanelResizeHandle className={styles.resizable} />
        <Panel>2</Panel>
        <PanelResizeHandle className={styles.resizable} />
        <Panel defaultSize={25} collapsible>
          3
        </Panel>
      </PanelGroup>
    </PageContainer>
  );
};
