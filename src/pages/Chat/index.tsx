import styles from  './index.less';
import { Row, Col } from 'antd';
import { useMount } from 'ahooks';

const ChatPage = () => {
    useMount(()=>{
        console.log(process.env);
    });
    return(
        <Row className={styles.container}>
            <Col className={styles.container_list} flex="170px">
            
            </Col>
            <Col flex="auto">Fill Rest</Col>
        </Row>
    );
};

export default ChatPage;
