import { RestApiModuleI, ApiModule, queryParams, PaginatedDto } from "@maioradv/client-core";
import { Campaign, CampaignEvent, FindOneCampaignDto } from "../campaigns/types";
import { UpdateOwnCampaignDto, QueryOwnCampaignDto, CreateOwnCampaignDto } from "./types";

export default class Campaigns extends ApiModule {
  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  create(args:CreateOwnCampaignDto): Promise<Campaign> {
    return this._call('post','/me/campaigns',args)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  findAll(args:QueryOwnCampaignDto = {}): Promise<PaginatedDto<Campaign>> {
    return this._call('get','/me/campaigns',queryParams(args))
  } 

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  findOne(id:number): Promise<FindOneCampaignDto> {
    return this._call('get',`/me/campaigns/${id}`)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  update(id:number,data:UpdateOwnCampaignDto): Promise<Campaign> {
    return this._call('patch',`/me/campaigns/${id}`,data)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  archive(id:number): Promise<Campaign> {
    return this._call('patch',`/me/campaigns/${id}/archive`)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  remove(id:number): Promise<Campaign> {
    return this._call('delete',`/me/campaigns/${id}`)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  findAllEvents(id:number): Promise<CampaignEvent[]> {
    return this._call('get',`/me/campaigns/${id}/events`)
  }
}