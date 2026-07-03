import { Webhook, FindOneWebhookDto } from "../webhooks/types";
import { RestApiModuleI, ApiModule, queryParams, PaginatedDto } from "@maioradv/client-core";
import { CreateOwnWebhookDto, UpdateOwnWebhookDto, QueryOwnWebhookDto } from "./types";

export default class Webhooks extends ApiModule implements RestApiModuleI {
  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  create(args:CreateOwnWebhookDto): Promise<Webhook> {
    return this._call('post','/me/webhooks',args)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  findAll(args:QueryOwnWebhookDto = {}): Promise<PaginatedDto<Webhook>> {
    return this._call('get','/me/webhooks',queryParams(args))
  } 

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  findOne(id:number): Promise<FindOneWebhookDto> {
    return this._call('get',`/me/webhooks/${id}`)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  update(id:number,data:UpdateOwnWebhookDto): Promise<Webhook> {
    return this._call('patch',`/me/webhooks/${id}`,data)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  remove(id:number): Promise<Webhook> {
    return this._call('delete',`/me/webhooks/${id}`)
  }
}