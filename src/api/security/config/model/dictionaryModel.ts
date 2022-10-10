/**
 * AppDictionaryConfig对象，字典配置
 */
export interface AppDictionaryConfig {
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
   * 字典编码
   */
  dictCode?: string;
  /**
   * 主键id
   */
  id?: number;
  /**
   * 是否启用
   */
  isEnabled?: boolean;
  /**
   * 标签等级
   */
  labelLevel?: string;
  /**
   * 名字
   */
  name?: string;
  /**
   * 排序
   */
  sort?: number;
  /**
   * 修改人
   */
  updateBy?: string;
  /**
   * 更新时间
   */
  updateTime?: Date;
  /**
   * 数据值
   */
  value?: string;
  /**
   * 数据类型
   */
  valueType?: string;
}
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
  isEnabled?: boolean;
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
