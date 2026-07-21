import { AudienceTag } from "../audience-tags/types";
import { RestApiModuleI, ApiModule, queryParams, PaginatedDto } from "@maioradv/client-core";
import { CreateOwnAudienceTagDto, UpdateOwnAudienceTagDto, QueryOwnAudienceTagDto } from "./types";

export default class AudienceTags extends ApiModule implements RestApiModuleI {
  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  create(args:CreateOwnAudienceTagDto): Promise<AudienceTag> {
    return this._call('post','/me/audience-tags',args)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  findAll(args:QueryOwnAudienceTagDto = {}): Promise<PaginatedDto<AudienceTag>> {
    return this._call('get','/me/audience-tags',queryParams(args))
  } 

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  findOne(id:number): Promise<AudienceTag> {
    return this._call('get',`/me/audience-tags/${id}`)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  update(id:number,data:UpdateOwnAudienceTagDto): Promise<AudienceTag> {
    return this._call('patch',`/me/audience-tags/${id}`,data)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  remove(id:number): Promise<AudienceTag> {
    return this._call('delete',`/me/audience-tags/${id}`)
  }
}