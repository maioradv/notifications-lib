import { OmitRequire, Translation } from "@maioradv/types";
import { Permission } from "../auth/types";
import { BooleanClause, StringClause, WhereClausesDto, Sorting, SortingParamsDto, QueryParamsDto, EnumClause, NumberClause, ObjectClause } from "@maioradv/client-core";

export type Role = {
  id: number;
  name: string;
  description: string|null;
  permissions: Permission[];
  translations: Translation[];
  createdAt: Date;
  updatedAt: Date;
}

export type CreateRoleDto = OmitRequire<Role,'id'|'createdAt'|'updatedAt','name'|'permissions'>
export type UpdateRoleDto = Partial<CreateRoleDto>

export type SortingRoleDto = SortingParamsDto<{
  name?:Sorting,
}>

export type ClausesRoleDto = WhereClausesDto<{
  name?:StringClause,
  description?:StringClause,
}>

export type QueryRoleDto = QueryParamsDto<SortingRoleDto,ClausesRoleDto>