import { BasicFetchResult } from '../../model/baseModel';
import { AppUserPagedQueryRequest, AppUserReq, AppUserResponse } from './model/userModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  LIST = '/user/list',
  CREATE = '/user',
  RESTFUL_API = '/user/',
  IsAccountExist = '/user/account-exist/',
}

export function pagelist(query: AppUserPagedQueryRequest) {
  return defHttp.post<BasicFetchResult<AppUserResponse>>({
    url: Api.LIST,
    data: query,
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

export function isAccountExist(account: string) {
  return defHttp.get<AppUserResponse>(
    {
      url: Api.IsAccountExist + account,
    },
    { errorMessageMode: 'none' },
  );
}
