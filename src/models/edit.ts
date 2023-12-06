import { useSessionStorageState } from 'ahooks';

const useEdit =()=>{
    const [edit, setEdit] = useSessionStorageState('edit');
    return { edit, setEdit };
};
export default useEdit;