import { Template } from "../templates/types";
import { RestApiModuleI, ApiModule, queryParams, PaginatedDto } from "@maioradv/client-core";
import { CreateOwnTemplateDto, UpdateOwnTemplateDto, QueryOwnTemplateDto } from "./types";

export default class Templates extends ApiModule implements RestApiModuleI {
  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  create(args:CreateOwnTemplateDto): Promise<Template> {
    return this._call('post','/me/templates',args)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  findAll(args:QueryOwnTemplateDto = {}): Promise<PaginatedDto<Template>> {
    return this._call('get','/me/templates',queryParams(args))
  } 

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  findOne(id:number): Promise<Template> {
    return this._call('get',`/me/templates/${id}`)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  update(id:number,data:UpdateOwnTemplateDto): Promise<Template> {
    return this._call('patch',`/me/templates/${id}`,data)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  remove(id:number): Promise<Template> {
    return this._call('delete',`/me/templates/${id}`)
  }
}