/**
 * 项目接口请求返回结构定义
 */
declare namespace API {
  /**
   * 返回结构定义
   */
  interface ResponseStructure<T = any> {
    success: boolean;
    data?: T;
    errorCode?: number;
    errorMessage?: string;
    timestamp?: number;
  }
  /**
   * 搜索返回
   */
  interface SearchResponse<T = any> {
    data: T[];
    total: number;
    current: number;
    pageSize: number;
  }
  /**
   * 获取一个请求
   * @param id 请求id
   */
  interface GetOneReq {
    id: number;
  }
}
