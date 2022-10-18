/**
 * AppDictionary对象，字典
 */
export interface AppDictionary {
  /**
   * 字典编码
   */
  code?: string;
  /**
   * 创建人
   */
  createBy?: string;
  /**
   * 创建时间
   */
  createTime?: Date;
  /**
   * 备注
   */
  description?: string;
  /**
   * 主键id
   */
  id?: number;
  /**
   * 是否启用
   */
  enabled?: boolean;
  /**
   * 字典名称
   */
  name?: string;
  /**
   * 修改人
   */
  updateBy?: string;
  /**
   * 更新时间
   */
  updateTime?: Date;
}
/**
 * AppDictionaryQueryRequest
 */
export interface AppDictionaryQueryRequest {
  /**
   * 字典编码
   */
  code?: string;
  /**
   * 字典名称
   */
  name?: string;
  /**
   * 当前页码
   */
  page?: number;
  /**
   * 分页大小
   */
  pageSize?: number;
}
