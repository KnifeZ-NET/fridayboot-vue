import { BasicFetchResult } from '../../model/baseModel';
import { AppUserPagedQueryRequest, AppUserReq, AppUserResponse } from './model/userModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  LIST = '/role/list',
  CREATE = '/role',
  RESTFUL_API = '/role/',
  ALL = '/role/all',
}

export function roleList(query: AppUserPagedQueryRequest) {
  return defHttp.post<BasicFetchResult<AppUserResponse>>({
    url: Api.LIST,
    data: query,
  });
}
export function allRoles() {
  return defHttp.post<AppUserResponse[]>({
    url: Api.ALL,
  });
}

export function getById(id: string) {
  return defHttp.get<AppUserResponse>({
    url: Api.RESTFUL_API + id,
  });
}

export function create(user: AppUserReq) {
  return defHttp.post<boolean>({
    url: Api.CREATE,
    data: user,
  });
}

export function update(user: AppUserReq) {
  defHttp.post<boolean>({
    url: Api.RESTFUL_API + user.id,
    data: user,
  });
}

export function remove(id: string) {
  defHttp.delete<boolean>({
    url: Api.RESTFUL_API + id,
  });
}
