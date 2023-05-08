import { BasicFetchResult } from '../../model/baseModel';
import { AppDictionaryConfig } from './model/dictionaryConfigModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  LIST = '/dictionary-config/list/',
  TREE = '/dictionary-config/tree/',
  CREATE = '/dictionary-config',
  RESTFUL_API = '/dictionary-config/',
}

export function listByDictCode(query: any) {
  return defHttp.post<AppDictionaryConfig[]>({
    url: Api.LIST + query.dictCode,
    data: query,
  });
}

export function dictionaryConfigTree(query: any) {
  return defHttp.post<any>({
    url: Api.TREE + query.dictCode,
    data: query,
  });
}

export function getById(id: string) {
  return defHttp.get<AppDictionaryConfig>({
    url: Api.RESTFUL_API + id,
  });
}

export function create(model: AppDictionaryConfig) {
  return defHttp.post<boolean>({
    url: Api.CREATE,
    data: model,
  });
}

export function update(model: AppDictionaryConfig) {
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
