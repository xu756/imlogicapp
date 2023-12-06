import styles from  './index.less';
import { useMount } from 'ahooks';

const HomePage = () => {
    useMount(()=>{
        console.log(process.env);
    });
    return(
        <div className={styles.container}>
            <h1>Home Page</h1>
        </div>
    );
};

export default HomePage;
