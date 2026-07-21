
import { QueryParamsDto } from "@maioradv/client-core";
import { ClausesChannelDto, CreateChannelDto, SortingChannelDto } from "../channels/types";
import { ClausesNotificationDto, UpdateNotificationDto, SortingNotificationDto } from "../notifications/types";
import { ClausesSettingDto, CreateSettingDto, SortingSettingDto } from "../settings/types";
import { ClausesTemplateDto, CreateTemplateDto, SortingTemplateDto } from "../templates/types";
import { ClausesWorkspaceDto, ClausesWorkspaceTokenDto, CreateWorkspaceDto, CreateWorkspaceTokenDto, SortingWorkspaceDto, SortingWorkspaceTokenDto } from "../workspaces/types";
import { ClausesImageDto, CreateImageDto, SortingImageDto } from "../images/types";
import { ClausesWebhookDto, CreateWebhookDto, SortingWebhookDto, UpdateWebhookDto } from "../webhooks/types";
import { ClausesAudienceTagDto, CreateAudienceTagDto, SortingAudienceTagDto, UpdateAudienceTagDto } from "../audience-tags/types";
import { ClausesAudienceDto, CreateAudienceDto, SortingAudienceDto, UpdateAudienceDto, PutAudienceDto } from "../audiences/types";
import { ClausesCampaignDto, CreateCampaignDto, SortingCampaignDto, UpdateCampaignDto } from "../campaigns/types";
import { ClausesSegmentDto, CreateSegmentDto, SortingSegmentDto, UpdateSegmentDto } from "../segments/types";

export type CreateOwnChannelDto = Omit<CreateChannelDto,'workspaceId'|'options'|'status'>
export type UpdateOwnChannelDto = Partial<CreateOwnChannelDto>
export type QueryOwnChannelDto = QueryParamsDto<Omit<SortingChannelDto,'workspaceId'>,Omit<ClausesChannelDto,'workspaceId'>>

export type UpdateOwnNotificationDto = Partial<UpdateNotificationDto>
export type QueryOwnNotificationDto = QueryParamsDto<Omit<SortingNotificationDto,'workspaceId'>,Omit<ClausesNotificationDto,'workspaceId'>>

export type CreateOwnSettingDto = Omit<CreateSettingDto,'workspaceId'>
export type UpdateOwnSettingDto = Partial<CreateOwnSettingDto>
export type PutOwnSettingDto = CreateOwnSettingDto
export type QueryOwnSettingDto = QueryParamsDto<Omit<SortingSettingDto,'workspaceId'>,Omit<ClausesSettingDto,'workspaceId'>>

export type CreateOwnTemplateDto = Omit<CreateTemplateDto,'workspaceId'>
export type UpdateOwnTemplateDto = Partial<CreateOwnTemplateDto>
export type QueryOwnTemplateDto = QueryParamsDto<Omit<SortingTemplateDto,'workspaceId'>,Omit<ClausesTemplateDto,'workspaceId'>>

export type CreateOwnWorkspaceTokenDto = Omit<CreateWorkspaceTokenDto,'workspaceId'>
export type UpdateOwnWorkspaceTokenDto = Partial<CreateOwnWorkspaceTokenDto>
export type QueryOwnWorkspaceTokenDto = QueryParamsDto<Omit<SortingWorkspaceTokenDto,'workspaceId'>,Omit<ClausesWorkspaceTokenDto,'workspaceId'>>

export type CreateOwnWorkspaceDto = Omit<CreateWorkspaceDto,'dashboardId'>
export type UpdateOwnWorkspaceDto = Partial<CreateOwnWorkspaceDto>
export type QueryOwnWorkspaceDto = QueryParamsDto<Omit<SortingWorkspaceDto,'dashboardId'>,Omit<ClausesWorkspaceDto,'dashboardId'>>

export type CreateOwnImageDto = Omit<CreateImageDto,'workspaceId'>
export type QueryOwnImageDto = QueryParamsDto<SortingImageDto,Omit<ClausesImageDto,'workspaceId'>>

export type CreateOwnWebhookDto = Omit<CreateWebhookDto,'workspaceId'>
export type UpdateOwnWebhookDto = Omit<UpdateWebhookDto,'workspaceId'>
export type QueryOwnWebhookDto = QueryParamsDto<Omit<SortingWebhookDto,'workspaceId'>,Omit<ClausesWebhookDto,'workspaceId'>>

export type CreateOwnAudienceTagDto = Omit<CreateAudienceTagDto,'workspaceId'>
export type UpdateOwnAudienceTagDto = Omit<UpdateAudienceTagDto,'workspaceId'>
export type QueryOwnAudienceTagDto = QueryParamsDto<Omit<SortingAudienceTagDto,'workspaceId'>,Omit<ClausesAudienceTagDto,'workspaceId'>>

export type CreateOwnAudienceDto = Omit<CreateAudienceDto,'workspaceId'>
export type UpdateOwnAudienceDto = Omit<UpdateAudienceDto,'workspaceId'>
export type QueryOwnAudienceDto = QueryParamsDto<Omit<SortingAudienceDto,'workspaceId'>,Omit<ClausesAudienceDto,'workspaceId'>>
export type PutOwnAudienceDto = Omit<PutAudienceDto,'workspaceId'>
export type PutOwnAudienceBatchDto = {
  audiences:PutOwnAudienceDto[],
  skipUpdate?: boolean;
  description?: string;
}

export type CreateOwnCampaignDto = Omit<CreateCampaignDto,'workspaceId'>
export type UpdateOwnCampaignDto = Omit<UpdateCampaignDto,'workspaceId'>
export type QueryOwnCampaignDto = QueryParamsDto<Omit<SortingCampaignDto,'workspaceId'>,Omit<ClausesCampaignDto,'workspaceId'>>

export type CreateOwnSegmentDto = Omit<CreateSegmentDto,'workspaceId'>
export type UpdateOwnSegmentDto = Omit<UpdateSegmentDto,'workspaceId'>
export type QueryOwnSegmentDto = QueryParamsDto<Omit<SortingSegmentDto,'workspaceId'>,Omit<ClausesSegmentDto,'workspaceId'>>