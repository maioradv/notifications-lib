import { Channel, ChannelSession } from "../channels/types";
import { RestApiModuleI, ApiModule, queryParams, PaginatedDto } from "@maioradv/client-core";
import { CreateOwnChannelDto, UpdateOwnChannelDto, QueryOwnChannelDto } from "./types";

export default class Channels extends ApiModule implements RestApiModuleI {
  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  create(args:CreateOwnChannelDto): Promise<Channel> {
    return this._call('post','/me/channels',args)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  findAll(args:QueryOwnChannelDto = {}): Promise<PaginatedDto<Channel>> {
    return this._call('get','/me/channels',queryParams(args))
  } 

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  findOne(id:number): Promise<Channel> {
    return this._call('get',`/me/channels/${id}`)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  update(id:number,data:UpdateOwnChannelDto): Promise<Channel> {
    return this._call('patch',`/me/channels/${id}`,data)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  remove(id:number): Promise<Channel> {
    return this._call('delete',`/me/channels/${id}`)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  auth(id:number): Promise<ChannelSession> {
    return this._call('post',`/me/channels/${id}/auth`)
  }
}