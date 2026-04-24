import { BooleanClause, StringClause, WhereClausesDto, Sorting, SortingParamsDto, QueryParamsDto, EnumClause, NumberClause, ObjectClause } from "@maioradv/client-core";
import { NotificationContent } from "../notifications/types";
import { OmitRequire, Translation } from "@maioradv/types";

export type TemplateContent = NotificationContent

export type Template = {
  id: number;
  namespace: string;
  slug: string;
  content: TemplateContent;
  translations: Translation[],
  workspaceId: number;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateTemplateDto = OmitRequire<Template,'id'|'createdAt'|'updatedAt','namespace'|'slug'|'content'|'workspaceId'>
export type UpdateTemplateDto = Partial<CreateTemplateDto>

export type SortingTemplateDto = SortingParamsDto<{
  namespace?:Sorting,
  slug?:Sorting,
  workspaceId?:Sorting,
}>

export type ClausesTemplateDto = WhereClausesDto<{
  search?:StringClause,
  namespace?:StringClause|StringClause[],
  slug?:StringClause|StringClause[],
  workspaceId?:NumberClause,
}>

export type QueryTemplateDto = QueryParamsDto<SortingTemplateDto,ClausesTemplateDto>