/**
 * AppUserResponse
 */
export interface AppUserResponse {
  /**
   * 账号
   */
  account?: string;
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 创建人
   */
  createBy?: string;
  /**
   * 创建时间
   */
  createTime?: Date;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 主键id
   */
  id?: number;
  /**
   * 是否启锁定
   */
  locked?: boolean;
  /**
   * 更新人
   */
  updateBy?: string;
  /**
   * 更新时间
   */
  updateTime?: Date;
  /**
   * 姓名
   */
  username?: string;
  /**
   * 所属部门
   */

  organizationId?: number;
  /**
   * 关联角色
   */
  roles?: number[];
  /**
   * 角色Name集合
   */
  userRoles?: string[];

  /**
   * 权限集合
   */
  permissions?: String[];
}
/**
 * AppUser对象Req，用户
 */
export interface AppUserReq {
  /**
   * 账号
   */
  account?: string;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 主键id
   */
  id?: number;
  /**
   * 是否启锁定
   */
  locked?: boolean;
  /**
   * 密码
   */
  password?: string;
  /**
   * 姓名
   */
  username?: string;
  /**
   * 所属部门
   */

  organizationId?: number;
  /**
   * 关联角色
   */
  roles?: number[];
}
/**
 * AppUserPagedQueryRequest
 */
export interface AppUserPagedQueryRequest {
  /**
   * 当前页码
   */
  page?: number;
  /**
   * 分页大小
   */
  pageSize?: number;
  /**
   * 用户姓名
   */
  username?: string;

  /**
   * 所属部门
   */
  organizationIds?: string[];
}
