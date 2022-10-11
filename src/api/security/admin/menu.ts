import { BasicFetchResult } from '../../model/baseModel';
import { AppMenu, AppMenuQueryRequest } from './model/menuModel';
import { TreeItem } from '/@/components/Tree';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  TREE_LIST = '/menu/tree-list',
  CREATE = '/menu',
  RESTFUL_API = '/menu/',
}

export function treeList(query: AppMenuQueryRequest) {
  return defHttp.post<BasicFetchResult<TreeItem>>({
    url: Api.TREE_LIST,
    data: query,
  });
}

export function getById(id: string) {
  return defHttp.get<AppMenu>({
    url: Api.RESTFUL_API + id,
  });
}

export function create(model: AppMenu) {
  return defHttp.post<boolean>({
    url: Api.CREATE,
    data: model,
  });
}

export function update(model: AppMenu) {
  defHttp.post<boolean>({
    url: Api.RESTFUL_API + model.id,
    data: model,
  });
}

export function remove(id: string) {
  defHttp.delete<boolean>({
    url: Api.RESTFUL_API + id,
  });
}
