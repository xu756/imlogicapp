declare namespace Store {
  export type Init = {
    loading?: boolean;
    logo: string;
    name: string;
    version: string;
    description: string;
    wsUrl: string;
    user: API.UserInfo;
  };
}
