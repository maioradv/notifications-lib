import { Metafield, OmitRequire, Translation } from "@maioradv/types";
import { ChannelType } from "../channels/types";
import { BooleanClause, StringClause, WhereClausesDto, Sorting, SortingParamsDto, QueryParamsDto, EnumClause, NumberClause, ObjectClause } from "@maioradv/client-core";


export type Config = {
  id: number;
  name: string;
  value: string;
  customValue: string|null;
  description: string|null;
  dashboardId: number,
  translations: Translation[];
  metafields: Metafield[],
  createdAt: Date;
  updatedAt: Date;
}

export type CreateConfigDto = OmitRequire<Config,'id'|'createdAt'|'updatedAt','name'|'value'|'dashboardId'>
export type PutConfigDto = CreateConfigDto
export type UpdateConfigDto = Partial<CreateConfigDto>

export type SortingConfigDto = SortingParamsDto<{
  name?:Sorting,
  dashboardId?:Sorting
}>

export type ClausesConfigDto = WhereClausesDto<{
  name?:StringClause,
  description?:StringClause,
  metafields?:ObjectClause<Partial<Metafield>>,
  translations?:ObjectClause<Partial<Translation>>,
  dashboardId?:NumberClause
}>

export type QueryConfigDto = QueryParamsDto<SortingConfigDto,ClausesConfigDto>

export enum RateLimitInterval {
  daily = 'daily',
  monthly = 'monthly',
}

export type LimitConfig = {
  channelType?: ChannelType;
  rateLimit: number;
  rateInterval: RateLimitInterval;
}