import { BooleanClause, StringClause, WhereClausesDto, Sorting, SortingParamsDto, QueryParamsDto, EnumClause, NumberClause, ObjectClause } from "@maioradv/client-core";
import { OmitRequire, Translation } from "@maioradv/types";
import { WebhookSignal } from "./signals";
export * from './signals'

export type Webhook = {
  id: number;
  url: string;
  secret: string;
  active: boolean;
  description: string|null;
  workspaceId: number;
  createdAt: Date;
  updatedAt: Date;
}

export type WebhookSubscription = {
  id: number;
  signal: WebhookSignal;
  webhookId: number;
  createdAt: Date;
  updatedAt: Date;
}

export type WebhookDelivery = {
  id: number;
  webhookId: number;
  signal: WebhookSignal;
  payload: Record<string, unknown>;
  statusCode: number|null;
  responseBody: string|null;
  success: boolean;
  durationMs: number|null;
  error: string|null;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateWebhookDto = OmitRequire<Webhook,'id'|'createdAt'|'updatedAt'|'secret','url'|'workspaceId'> & {
  subscriptions?: WebhookSignal[]
}
export type UpdateWebhookDto = Partial<CreateWebhookDto> & {
  removeSubscriptions?: WebhookSignal[]
}

export type FindOneWebhookDto = Webhook & {
  subscriptions:WebhookSubscription[],
  deliveries:WebhookDelivery[]
}

export type SortingWebhookDto = SortingParamsDto<{
  description?:Sorting,
  url?:Sorting,
  active?:Sorting,
  workspaceId?:Sorting,
}>

export type ClausesWebhookDto = WhereClausesDto<{
  search?:StringClause,
  active?:BooleanClause,
  workspaceId?:NumberClause,
}>

export type QueryWebhookDto = QueryParamsDto<SortingWebhookDto,ClausesWebhookDto>