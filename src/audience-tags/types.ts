import { MetafieldClause, NumberClause, ObjectClause, QueryParamsDto, Sorting, SortingParamsDto, StringClause, WhereClausesDto } from "@maioradv/client-core";
import { Metafield, OmitRequire } from "@maioradv/types";

export type AudienceTag = {
  id: number;
  name: string;
  workspaceId: number;
  metafields: Metafield[];
  createdAt: Date;
  updatedAt: Date;
};

export type CreateAudienceTagDto = OmitRequire<AudienceTag, 'id' | 'createdAt' | 'updatedAt','name'|'workspaceId'>

export type UpdateAudienceTagDto = Partial<CreateAudienceTagDto>;

export type SortingAudienceTagDto = SortingParamsDto<{
  name?: Sorting;
  workspaceId?: Sorting;
}>;

export type ClausesAudienceTagDto = WhereClausesDto<{
  name?: StringClause;
  metafields?: ObjectClause<MetafieldClause>;
  workspaceId?: NumberClause;
}>;

export type QueryAudienceTagDto = QueryParamsDto<SortingAudienceTagDto, ClausesAudienceTagDto>;