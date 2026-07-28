import { Segment } from "../segments/types";
import { RestApiModuleI, ApiModule, queryParams, PaginatedDto } from "@maioradv/client-core";
import { CreateOwnSegmentDto, UpdateOwnSegmentDto, QueryOwnSegmentDto, QueryOwnAudienceSegmentDto } from "./types";
import { Audience } from "../audiences/types";

export default class Segments extends ApiModule implements RestApiModuleI {
  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  create(args:CreateOwnSegmentDto): Promise<Segment> {
    return this._call('post','/me/segments',args)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  findAll(args:QueryOwnSegmentDto = {}): Promise<PaginatedDto<Segment>> {
    return this._call('get','/me/segments',queryParams(args))
  } 

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  findOne(id:number): Promise<Segment> {
    return this._call('get',`/me/segments/${id}`)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  update(id:number,data:UpdateOwnSegmentDto): Promise<Segment> {
    return this._call('patch',`/me/segments/${id}`,data)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  remove(id:number): Promise<Segment> {
    return this._call('delete',`/me/segments/${id}`)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  audience(id:number,args:QueryOwnAudienceSegmentDto = {}): Promise<PaginatedDto<Audience>> {
    return this._call('get',`/me/segments/${id}/audiences`,queryParams(args))
  } 
}