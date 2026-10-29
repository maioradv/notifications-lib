import { BooleanClause, StringClause, WhereClausesDto, Sorting, SortingParamsDto, QueryParamsDto, EnumClause, NumberClause } from "@maioradv/client-core";
import { OmitRequire } from '@maioradv/types'
import { ChannelConfig, ChannelOptions, ChannelType } from "../channels/types";

export type ChannelPreset = {
  id: number;
  type: ChannelType;
  config: ChannelConfig;
  options: ChannelOptions | null;
  name: string;
  public: boolean;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}


export type CreateChannelPresetDto = OmitRequire<ChannelPreset,'id'|'createdAt'|'updatedAt','type'|'name'|'config'>
export type UpdateChannelPresetDto = Partial<Omit<CreateChannelPresetDto,'type'>>

export type SortingChannelPresetDto = SortingParamsDto<{
  type?:Sorting,
  name?:Sorting,
}>

export type ClausesChannelPresetDto = WhereClausesDto<{
  search?:StringClause,
  public?:BooleanClause,
  type?:EnumClause<ChannelType>,
}>

export type QueryChannelPresetDto = QueryParamsDto<SortingChannelPresetDto,ClausesChannelPresetDto>

export enum CommonChannelPresets {
  'maiorAmazonSes' = 1,
  'maiorWaha' = 2
}