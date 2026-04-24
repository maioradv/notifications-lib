
import { QueryParamsDto } from "@maioradv/client-core";
import { ClausesChannelDto, CreateChannelDto, SortingChannelDto } from "../channels/types";
import { ClausesNotificationDto, UpdateNotificationDto, SortingNotificationDto } from "../notifications/types";
import { ClausesSettingDto, CreateSettingDto, SortingSettingDto } from "../settings/types";
import { ClausesTemplateDto, CreateTemplateDto, SortingTemplateDto } from "../templates/types";
import { ClausesWorkspaceDto, ClausesWorkspaceTokenDto, CreateWorkspaceDto, CreateWorkspaceTokenDto, SortingWorkspaceDto, SortingWorkspaceTokenDto } from "../workspaces/types";

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