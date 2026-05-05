import { BooleanClause, StringClause, WhereClausesDto, Sorting, SortingParamsDto, QueryParamsDto, EnumClause, NumberClause, ObjectClause } from "@maioradv/client-core";
import { NotificationContent } from "../notifications/types";
import { OmitRequire, Translation } from "@maioradv/types";

export type TemplateContent = NotificationContent

export type Template = {
  id: number;
  namespace: string;
  name: string;
  content: TemplateContent;
  translations: Translation[],
  workspaceId: number|null;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateTemplateDto = OmitRequire<Template,'id'|'createdAt'|'updatedAt','namespace'|'name'|'content'>
export type UpdateTemplateDto = Partial<CreateTemplateDto>

export type SortingTemplateDto = SortingParamsDto<{
  namespace?:Sorting,
  name?:Sorting,
  workspaceId?:Sorting,
}>

export type ClausesTemplateDto = WhereClausesDto<{
  search?:StringClause,
  namespace?:StringClause|StringClause[],
  name?:StringClause|StringClause[],
  workspaceId?:NumberClause,
}>

export type QueryTemplateDto = QueryParamsDto<SortingTemplateDto,ClausesTemplateDto>