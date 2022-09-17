import { RouteItem } from './menuModel';

export interface ApplicationConfigruationModel {
  // 用户id
  userid: string;
  // 语言
  language: string;
  // 权限
  permissions: string[];
  // 暗黑模式
  darkMode: boolean;
  // 角色
  roles: string[];

  menus: RouteItem[];
}
