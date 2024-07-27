import Chat from '@/components/chat';
import { useMount } from 'ahooks';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import styles from './index.less';

export default () => {
  useMount(() => {});

  return (
    <PanelGroup
      autoSaveId="dashboard"
      direction="horizontal"
      className={styles.layout}
    >
      <Panel
        defaultSize={20}
        minSize={20}
        maxSize={40}
        className={styles.chatlist}
      >
        side
      </Panel>
      <PanelResizeHandle className={styles.resizable} />
      <Panel className={styles.content}>
        <Chat />
      </Panel>
      <PanelResizeHandle className={styles.resizable} />
      <Panel
        defaultSize={20}
        minSize={20}
        maxSize={40}
        className={styles.chatlist}
      >
        side
      </Panel>
    </PanelGroup>
  );
};
