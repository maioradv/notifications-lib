import { Setting } from "../settings/types";
import { RestApiModuleI, ApiModule, queryParams, PaginatedDto } from "@maioradv/client-core";
import { CreateOwnSettingDto, PutOwnSettingDto, UpdateOwnSettingDto, QueryOwnSettingDto } from "./types";

export default class Settings extends ApiModule implements RestApiModuleI {
  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  create(args:CreateOwnSettingDto): Promise<Setting> {
    return this._call('post','/me/settings',args)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  put(args:PutOwnSettingDto): Promise<Setting> {
    return this._call('put','/me/settings',args)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  findAll(args:QueryOwnSettingDto = {}): Promise<PaginatedDto<Setting>> {
    return this._call('get','/me/settings',queryParams(args))
  } 

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  findOne(id:number): Promise<Setting> {
    return this._call('get',`/me/settings/${id}`)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  update(id:number,data:UpdateOwnSettingDto): Promise<Setting> {
    return this._call('patch',`/me/settings/${id}`,data)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  remove(id:number): Promise<Setting> {
    return this._call('delete',`/me/settings/${id}`)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  findByKey(namespace:string,name:string): Promise<Setting> {
    return this._call('get',`/me/settings/${namespace}/${name}`)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  removeByKey(namespace:string,name:string): Promise<Setting> {
    return this._call('delete',`/me/settings/${namespace}/${name}`)
  }
}