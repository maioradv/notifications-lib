import { RestApiModuleI, ApiModule, GraphApiModuleI, queryParams, RemoveGQL, PaginatedDto, PaginatedGQL } from "@maioradv/client-core";
import { WebhooksResolvers, QueryWebhookGQLDto } from "./graphql";
import { Webhook, CreateWebhookDto, QueryWebhookDto, UpdateWebhookDto, FindOneWebhookDto } from "./types";

export default class Webhooks extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(args:CreateWebhookDto): Promise<Webhook> {
    return this._call('post','/webhooks',args)
  }

  findAll(args:QueryWebhookDto = {}): Promise<PaginatedDto<Webhook>> {
    return this._call('get','/webhooks',queryParams(args))
  } 

  findOne(id:number): Promise<FindOneWebhookDto> {
    return this._call('get',`/webhooks/${id}`)
  }

  update(id:number,data:UpdateWebhookDto): Promise<Webhook> {
    return this._call('patch',`/webhooks/${id}`,data)
  }

  remove(id:number): Promise<Webhook> {
    return this._call('delete',`/webhooks/${id}`)
  }

  list(args:QueryWebhookGQLDto = {}): Promise<PaginatedGQL<Webhook>> {
    return this._graphql(WebhooksResolvers.query.webhooks,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql(WebhooksResolvers.mutation.removeWebhooks,{
      id
    })
  }
}