import { RouteItem } from './menuModel';

export interface AppConfigurationModel {
  // 用户id
  userId: string;
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
