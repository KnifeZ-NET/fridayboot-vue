import { BasicFetchResult } from '../../model/baseModel';
import { AppDictionary, AppDictionaryQueryRequest } from './model/dictionaryModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  LIST = '/dictionary/list',
  CREATE = '/dictionary',
  RESTFUL_API = '/dictionary/',
}

export function pagelist(query: AppDictionaryQueryRequest) {
  return defHttp.post<BasicFetchResult<AppDictionary>>({
    url: Api.LIST,
    data: query,
  });
}

export function getById(id: string) {
  return defHttp.get<AppDictionary>({
    url: Api.RESTFUL_API + id,
  });
}

export function create(model: AppDictionary) {
  return defHttp.post<boolean>({
    url: Api.CREATE,
    data: model,
  });
}

export function update(model: AppDictionary) {
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
