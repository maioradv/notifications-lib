import { ChannelType } from "../channels/types";
import { BooleanClause, DateClause, EnumClause, NumberClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { OmitRequire } from "../types";

export enum ProviderStatus {
  operational = 'operational',
  degraded = 'degraded',
  outage = 'outage',
  maintenance = 'maintenance',
}

export type Provider = {
  id: number;
  status: ProviderStatus;
  slug: string;
  name: string;
  channelType: ChannelType;
  createdAt: Date;
  updatedAt: Date;
}

export type ProviderEvent = {
  id: number;
  event: string;
  detail: string | null;
  providerId: number;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateProviderDto = OmitRequire<Provider,'id'|'createdAt'|'updatedAt','slug'|'name'|'channelType'>
export type UpdateProviderDto = Partial<CreateProviderDto>

export type CreateProviderEventDto = OmitRequire<ProviderEvent,'id'|'createdAt'|'updatedAt'|'providerId','event'>

export type SortingProviderDto = SortingParamsDto<{
  channelType?:Sorting,
  slug?:Sorting,
  name?:Sorting,
  status?:Sorting,
}>

export type ClausesProviderDto = WhereClausesDto<{
  search?:StringClause,
  status?:EnumClause<ProviderStatus>,
  channelType?:EnumClause<ChannelType>,
}>

export type QueryProviderDto = QueryParamsDto<SortingProviderDto,ClausesProviderDto>
