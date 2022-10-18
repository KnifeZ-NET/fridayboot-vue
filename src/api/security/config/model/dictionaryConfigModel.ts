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
  enabled?: boolean;
  /**
   * 标签等级
   */
  labelLevel?: string;
  /**
   * 图标
   */
  icon?: string;
  /**
   * 名字
   */
  name?: string;
  /**
   * 排序
   */
  sort?: number;
  /**
   * 更新人
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
