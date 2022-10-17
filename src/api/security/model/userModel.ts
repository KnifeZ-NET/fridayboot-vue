/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string;
  password: string;
  rememberMe: boolean;
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  accessToken: string;
  expires: number;
  refreshToken: string;
  refreshTokenExpires: number;
  scope: string;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  // 用户id
  id: string | number;
  // 用户名
  username: string;
  // 头像
  avatar: string;
  // 权限
  permissions: string[];
  // 角色
  userRoles: string[];

  // 真实名字
  realName: string;
  // 介绍
  desc?: string;
  roles: RoleInfo[];
}
