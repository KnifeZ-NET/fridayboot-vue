/**
 * AppOrganizationUnit对象，组织机构
 */
export interface AppOrganizationUnit {
  /**
   * 主键id
   */
  id?: number;
  /**
   * 名称
   */
  name?: string;
  /**
   * 机构编码
   */
  unitCode?: string;
  /**
   * 父级节点id
   */
  parentId?: number;
  /**
   * 简介
   */
  description?: string;
  /**
   * 更新人
   */
  updateBy?: string;
  /**
   * 更新时间
   */
  updateTime?: Date;
  /**
   * 创建人
   */
  createBy?: string;
  /**
   * 创建时间
   */
  createTime?: Date;
}

/**
 * AppOrganizationUnit对象，组织机构
 */
export interface AppOrganizationUnit对象 {
  /**
   * 创建人
   */
  createBy?: string;
  /**
   * 创建时间
   */
  createTime?: Date;
  /**
   * 简介
   */
  description?: string;
  /**
   * 主键id
   */
  id?: number;
  /**
   * 名称
   */
  name?: string;
  /**
   * 机构编码
   */
  unitCode?: string;
  /**
   * 更新人
   */
  updateBy?: string;
  /**
   * 更新时间
   */
  updateTime?: Date;
}

/**
 * AppOrganizationUnitQueryRequest
 */
export interface AppOrganizationUnitQueryRequest {
  /**
   * 名称
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
  /**
   * 机构编码
   */
  unitCode?: string;
}
