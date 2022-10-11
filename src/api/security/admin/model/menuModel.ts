/**
 * AppMenu对象，菜单
 */
export interface AppMenu {
  /**
   * 组件路径
   */
  comPath?: string;
  /**
   * 创建人
   */
  createBy?: string;
  /**
   * 创建时间
   */
  createTime?: Date;
  /**
   * 图标
   */
  icon?: string;
  /**
   * 主键id
   */
  id?: number;
  /**
   * 是否缓存
   */
  keepAlive?: boolean;
  /**
   * 是否启用
   */
  enabled?: boolean;
  /**
   * 是否显示
   */
  visible?: boolean;
  /**
   * 菜单名称
   */
  name?: string;
  /**
   * 父级节点
   */
  parentId?: number;
  /**
   * 权限标识
   */
  permission?: string;
  /**
   * 路由地址
   */
  routePath?: string;
  /**
   * 排序
   */
  sort?: number;
  /**
   * 菜单类型
   */
  type?: string;
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
 * AppMenuQueryRequest
 */
export interface AppMenuQueryRequest {
  /**
   * 状态
   */
  enabled?: boolean;
  /**
   * 名称
   */
  name?: string;
}
