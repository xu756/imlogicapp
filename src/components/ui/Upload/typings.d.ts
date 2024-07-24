declare namespace Ui {
  interface UploadProps {
    url?: string;
    showUploadList?: false;
    setUrl: (url: any) => void;
    setLoading?: (loading: boolean) => void;
    data?: any;
    width?: number;
    height?: number;
  }
}
