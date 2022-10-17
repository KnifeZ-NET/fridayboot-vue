import {
  AppOrganizationUnitQueryRequest,
  AppOrganizationUnit,
} from './model/organizationUnitModel';
import { TreeItem } from '/@/components/Tree';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  TREE_LIST = '/organization-unit/tree-list',
  CREATE = '/organization-unit',
  RESTFUL_API = '/organization-unit/',
}

export function organizationTreeList(query: AppOrganizationUnitQueryRequest) {
  return defHttp.post<TreeItem[]>({
    url: Api.TREE_LIST,
    data: query,
  });
}

export function getById(id: string) {
  return defHttp.get<AppOrganizationUnit>({
    url: Api.RESTFUL_API + id,
  });
}

export function create(model: AppOrganizationUnit) {
  return defHttp.post<boolean>({
    url: Api.CREATE,
    data: model,
  });
}

export function update(model: AppOrganizationUnit) {
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
