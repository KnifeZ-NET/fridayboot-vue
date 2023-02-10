import { AppMenu, AppMenuQueryRequest, getMenuListResultModel } from './model/menuModel';
import { TreeItem } from '/@/components/Tree';
import { defHttp } from '/@/utils/http/axios';

export enum MenuApi {
  TreeList = '/menu/tree-list',
  Create = '/menu',
  RestfulApi = '/menu/',
  GetMenuList = '/menu/list',
  PermissionList = '/v3/api-docs?group=v1.x',
}

export function menuTreeList(query: AppMenuQueryRequest) {
  return defHttp.post<TreeItem[]>({
    url: MenuApi.TreeList,
    data: query,
  });
}

export function getMenuList() {
  return defHttp.post<getMenuListResultModel>({
    url: MenuApi.GetMenuList,
  });
}

export function getMenuPermissionList() {
  return defHttp.get<any>(
    { url: MenuApi.PermissionList },
    {
      urlPrefix: '',
      isReturnNativeResponse: true,
    },
  );
}

export function getById(id: string) {
  return defHttp.get<AppMenu>({
    url: MenuApi.RestfulApi + id,
  });
}

export function create(model: AppMenu) {
  return defHttp.post<boolean>({
    url: MenuApi.Create,
    data: model,
  });
}

export function update(model: AppMenu) {
  defHttp.post<boolean>({
    url: MenuApi.RestfulApi + model.id,
    data: model,
  });
}

export function remove(id: string) {
  defHttp.delete<boolean>({
    url: MenuApi.RestfulApi + id,
  });
}
