import { OmitRequire } from "@maioradv/types";
import { ApiToken } from "../apitokens/types";
import { BooleanClause, StringClause, WhereClausesDto, Sorting, SortingParamsDto, QueryParamsDto, EnumClause, NumberClause, ObjectClause } from "@maioradv/client-core";

export type Workspace = {
  id: number;
  name: string;
  description: string|null;
  dashboardId: number|null;
  deletedAt: Date|null;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateWorkspaceDto = OmitRequire<Workspace,'id'|'createdAt'|'updatedAt'|'deletedAt','name'>
export type UpdateWorkspaceDto = Partial<CreateWorkspaceDto>

export type SortingWorkspaceDto = SortingParamsDto<{
  name?:Sorting,
  dashboardId?:Sorting,
}>

export type ClausesWorkspaceDto = WhereClausesDto<{
  search?:StringClause,
  dashboardId?:NumberClause,
}>

export type QueryWorkspaceDto = QueryParamsDto<SortingWorkspaceDto,ClausesWorkspaceDto>

export type WorkspaceToken = ApiToken & {
  workspaceId: number;
}

export type CreateWorkspaceTokenDto = Omit<WorkspaceToken,'id'|'createdAt'|'updatedAt'|'uuid'|'readOnly'>
export type UpdateWorkspaceTokenDto = Partial<CreateWorkspaceTokenDto>

export type SortingWorkspaceTokenDto = SortingParamsDto<{
  name?:Sorting,
  workspaceId?:Sorting,
}>

export type ClausesWorkspaceTokenDto = WhereClausesDto<{
  search?:StringClause,
  readOnly?:BooleanClause,
  workspaceId?:NumberClause,
}>

export type QueryWorkspaceTokenDto = QueryParamsDto<SortingWorkspaceTokenDto,ClausesWorkspaceTokenDto>

