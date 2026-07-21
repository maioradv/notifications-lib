import { RestApiModuleI, ApiModule, queryParams, PaginatedDto, BulkResponse } from "@maioradv/client-core";
import { Audience, AudienceEvent, FindOneAudienceDto, FindAllAudienceDto } from "../audiences/types";
import { UpdateOwnAudienceDto, QueryOwnAudienceDto, CreateOwnAudienceDto, PutOwnAudienceDto, PutOwnAudienceBatchDto } from "./types";

export default class Audiences extends ApiModule {
  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  create(args:CreateOwnAudienceDto): Promise<Audience> {
    return this._call('post','/me/audiences',args)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  put(args:PutOwnAudienceDto): Promise<Audience> {
    return this._call('put','/me/audiences',args)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  putBatch(args:PutOwnAudienceBatchDto): Promise<void> {
    return this._call('put','/me/audiences/batch',args)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  findAll(args:QueryOwnAudienceDto = {}): Promise<PaginatedDto<FindAllAudienceDto>> {
    return this._call('get','/me/audiences',queryParams(args))
  } 

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  findOne(id:number): Promise<FindOneAudienceDto> {
    return this._call('get',`/me/audiences/${id}`)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  update(id:number,data:UpdateOwnAudienceDto): Promise<Audience> {
    return this._call('patch',`/me/audiences/${id}`,data)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  archive(id:number): Promise<Audience> {
    return this._call('patch',`/me/audiences/${id}/archive`)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  archiveMany(ids:number[]): Promise<BulkResponse> {
    return this._call('patch',`/me/audiences/archive`,{ ids })
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  remove(id:number): Promise<Audience> {
    return this._call('delete',`/me/audiences/${id}`)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  removeMany(ids:number[]): Promise<BulkResponse> {
    return this._call('delete',`/me/audiences`,{ ids })
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  restore(id:number): Promise<Audience> {
    return this._call('patch',`/me/audiences/${id}/restore`)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  restoreMany(ids:number[]): Promise<BulkResponse> {
    return this._call('patch',`/me/audiences/restore`,{ ids })
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  findAllEvents(id:number): Promise<AudienceEvent[]> {
    return this._call('get',`/me/audiences/${id}/events`)
  }
}