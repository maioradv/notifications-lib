import { BooleanClause, StringClause, WhereClausesDto, Sorting, SortingParamsDto, QueryParamsDto, EnumClause, NumberClause, ObjectClause } from "@maioradv/client-core";
import { Metafield, OmitRequire, Translation } from "@maioradv/types";

export type Setting = {
  id: number;
  namespace: string;
  name: string;
  value: string;
  description: string|null;
  workspaceId: number;
  translations: Translation[];
  metafields: Metafield[],
  createdAt: Date;
  updatedAt: Date;
}

export type CreateSettingDto = OmitRequire<Setting,'id'|'createdAt'|'updatedAt','namespace'|'name'|'value'|'workspaceId'>
export type UpdateSettingDto = Partial<CreateSettingDto>
export type PutSettingDto = CreateSettingDto

export type SortingSettingDto = SortingParamsDto<{
  name?:Sorting,
  namespace?:Sorting,
  workspaceId?:Sorting
}>

export type ClausesSettingDto = WhereClausesDto<{
  name?:StringClause,
  description?:StringClause,
  namespace?:StringClause|StringClause[],
  metafields?:ObjectClause<Partial<Metafield>>,
  translations?:ObjectClause<Partial<Translation>>,
  workspaceId?:NumberClause
}>

export type QuerySettingDto = QueryParamsDto<SortingSettingDto,ClausesSettingDto>