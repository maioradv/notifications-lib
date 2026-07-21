import { BooleanClause, DateClause, EnumClause, NumberClause, Sorting, SortingParamsDto, StringClause, WhereClausesDto } from "@maioradv/client-core";
import { QueryParamsDto } from "@maioradv/client-core";
import { OmitRequire, WithRelations } from "@maioradv/types";
import { Segment } from "../segments/types";

export enum CampaignStatus {
  draft = 'draft',
  scheduled = 'scheduled',
  processing = 'processing',
  sent = 'sent',
  failed = 'failed'
}

export enum CampaignChannel {
  whatsapp = 'whatsapp',
  email = 'email'
}

export type Campaign = {
  id: number;
  name: string;
  status: CampaignStatus;
  channel: CampaignChannel;
  templateId: number | null;
  segmentId: number | null;
  scheduledAt: Date;
  workspaceId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export type CampaignEvent = {
  id: number;
  event: string;
  detail: string | null;
  campaignId: number;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateCampaignDto = OmitRequire<Campaign,'id' | 'createdAt' | 'updatedAt' | 'deletedAt','name' | 'channel' | 'scheduledAt'|'workspaceId'>;

export type UpdateCampaignDto = Partial<CreateCampaignDto>;

export type SortingCampaignDto = SortingParamsDto<{
  name?: Sorting;
  workspaceId?: Sorting;
}>;

export type ClausesCampaignDto = WhereClausesDto<{
  search?: StringClause;
  name?: StringClause;
  status?: EnumClause<CampaignStatus>;
  channel?: EnumClause<CampaignChannel>;
  templateId?: NumberClause;
  segmentId?: NumberClause;
  minScheduledAt?: DateClause;
  maxScheduledAt?: DateClause;
  isDeleted?: BooleanClause;
  workspaceId?: NumberClause;
}>;

export type QueryCampaignDto = QueryParamsDto<SortingCampaignDto, ClausesCampaignDto>;

export type FindOneCampaignDto = WithRelations<Campaign, {
  segment: Segment | null;
}>;