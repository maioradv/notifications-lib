import { BooleanClause, MetadataClause, NumberClause, ObjectClause, QueryParamsDto, StringClause, WhereClausesDto } from "@maioradv/client-core";
import { Sorting } from "@maioradv/client-core";
import { SortingParamsDto } from "@maioradv/client-core";
import { Gid, MetadataFilter, OmitRequire, WithRelations } from "@maioradv/types";
import { AudienceTag } from "../audience-tags/types";

export type Audience = {
  id: number;
  phone: string | null;
  email: string | null;
  name: string;
  lastName: string | null;
  customerId: number | null;
  uuid: string;
  locale: string;
  metadata: Record<string, unknown>;
  workspaceId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export type AudienceEvents = {
  name: 'audience.dataConflict',
  payload: {
    field:string,
    existing:string|boolean|number|Date,
    incoming:string|boolean|number|Date,
  }
} | {
  name: 'audience.subscriptionUpdate',
  payload: {
    action:'create'|'remove',
    reason?:string
  }
} | {
  name: 'audience.campaignSent',
  payload: {
    id:number,
    name:string,
    channel:'whatsapp'|'email',
    scheduledAt:Date
  }
} | {
  name: 'audience.customEvent',
  payload: {
    name:string,
    data:Record<string,unknown>
  }
}

export type AudienceEventData = AudienceEvents;

export type CreateAudienceDto = OmitRequire<Audience,'id' | 'uuid' | 'createdAt' | 'updatedAt' | 'deletedAt','name'|'workspaceId'> & {
  tags?: number[];
};

export type UpdateAudienceDto = Partial<CreateAudienceDto> & {
  removeTags?: number[];
};

export type PushAudienceDto = OmitRequire<Audience,'id' | 'uuid' | 'createdAt' | 'updatedAt' | 'deletedAt' | 'workspaceId','name'>

export type PutAudienceDto = CreateAudienceDto & {
  id?:number;
  removeTags?: number[];
};

export type PutAudienceBatchDto = {
  audiences: PutAudienceDto[];
  skipUpdate?: boolean;
  description?: string,
};

export type AudienceEvent = {
  id: number;
  audienceId: number;
  data: AudienceEventData;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateAudienceEventDto = OmitRequire<AudienceEvent, 'id' | 'audienceId' | 'createdAt' | 'updatedAt', 'data'>

export type UpdateAudienceEventDto = Partial<CreateAudienceEventDto>;

export type SortingAudienceDto = SortingParamsDto<{
  name?: Sorting;
  phone?: Sorting;
  email?: Sorting;
  lastName?: Sorting;
  workspaceId?: Sorting;
}>;

export type ClausesAudienceDto = WhereClausesDto<{
  search?: StringClause;
  name?: StringClause;
  phone?: StringClause;
  email?: StringClause;
  lastName?: StringClause;
  customerId?: NumberClause;
  tagId?: NumberClause;
  locale?:StringClause|StringClause[],
  metadata?: ObjectClause<MetadataClause>;
  isDeleted?: BooleanClause;
  workspaceId?: NumberClause;
}>;

export type QueryAudienceDto = QueryParamsDto<SortingAudienceDto, ClausesAudienceDto>;

export type FindAllAudienceDto = WithRelations<Audience, {
  tags: AudienceTag[];
}>;

export type FindOneAudienceDto = WithRelations<Audience, {
  tags: AudienceTag[];
}>;