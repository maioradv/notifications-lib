import { RestApiModuleI, ApiModule, GraphApiModuleI, queryParams, RemoveGQL, PaginatedDto, PaginatedGQL } from "@maioradv/client-core";
import { WebhooksResolvers, QueryWebhookGQLDto } from "./graphql";
import { Webhook, CreateWebhookDto, QueryWebhookDto, UpdateWebhookDto, FindOneWebhookDto } from "./types";
import { createHmac, timingSafeEqual } from "crypto";

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

  verifySignature(headerSignature:string,secret:string,rawBody:string) : boolean {
    const [algo, signature] = headerSignature.split('=');
    if (algo !== 'sha256') return false;
    const expected = createHmac('sha256', secret).update(rawBody).digest('hex');
    return timingSafeEqual(Buffer.from(signature, 'hex'), Buffer.from(expected, 'hex'));
  }
}