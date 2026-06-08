import { OmitRequire } from "@maioradv/types";
import { ChannelType } from "../channels/types";
import { BooleanClause, StringClause, WhereClausesDto, Sorting, SortingParamsDto, QueryParamsDto, EnumClause, NumberClause, ObjectClause, DateClause, MetadataClause } from "@maioradv/client-core";

export enum NotificationStatus {
  pending = 'pending',
  queued = 'queued',
  delayed = 'delayed',
  sent = 'sent',
  failed = 'failed',
  delivered = 'delivered'
}

export type ContentEmail = {
  type:'email',
  email:{
    name:string,
    address:string,
    subject:string,
    html:string
    text?:string
  }
}

export type ContentWhatsapp = {
  type:'whatsapp',
  whatsapp:{
    body:string,
    image?:string
  }
}

export type ContentPush = {
  type:'push',
  push:{
    title:string,
    body:string,
    channelId?: string,
    data?: Record<string, unknown>,
    subtitle?: string,
    ttl?: number,
    expiration?: number,
    priority?: "default" | "normal" | "high",
    interruptionLevel?: "active" | "critical" | "passive" | "time-sensitive",
    badge?: number,
    icon?: string,
    categoryId?: string,
    mutableContent?: boolean,
    collapseId?: string,
    tag?: string,
  }
}

export type ContentWebPush = {
  type:'webpush',
  webpush:{
    title:string,
    body:string,
    url?:string,
    image?:string,
    icon?:string,
    topic?:string
  }
}

export type NotificationContent = ContentEmail | ContentWhatsapp | ContentPush | ContentWebPush

export type RecipientSmtp = {
  provider:'smtp',
  smtp:{
    name:string,
    email:string,
  }
}

export type RecipientWhatsappWeb = {
  provider:'whatsappWeb',
  whatsappWeb:{
    phone:string,
  }
}

export type RecipientBaileys = {
  provider:'baileys',
  baileys:{
    phone:string;
  }
}

export type RecipientExpo = {
  provider:'expo',
  expo:{
    token:string
  }
}

export type RecipientVapid = {
  provider:'vapid',
  vapid:{
    endpoint: string
    p256dh: string
    auth: string
  }
}

export type NotificationRecipient = {
  locale?:string
} & (RecipientSmtp | RecipientWhatsappWeb | RecipientExpo | RecipientVapid | RecipientBaileys)

export type NotificationOptions = {
  unsubscribeUrl?: string
}

export type Notification = {
  id: number;
  status: NotificationStatus;
  token: string;
  content: NotificationContent|null;
  templateId: number|null;
  workspaceId: number;
  channelId:number|null;
  type: ChannelType;
  recipient: NotificationRecipient;
  variables: Record<string,any>;
  metadata: Record<string,any>;
  options: NotificationOptions;
  scheduledAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export type NotificationEvent = {
  id: number;
  event: string;
  detail: string | null;
  notificationId: number;
  createdAt: Date;
  updatedAt: Date;
}

type WithContent = {
  content:NotificationContent,
  templateId?:number
}
type WithTemplate = {
  content?:NotificationContent,
  templateId:number
}

export type CreateNotificationDto = OmitRequire<Notification,'id'|'createdAt'|'updatedAt'|'status'|'type'|'content'|'templateId'|'token','workspaceId'|'recipient'> & (WithContent | WithTemplate)
export type UpdateNotificationDto = Partial<Pick<Notification,'variables'|'scheduledAt'>>

export type CreateNotificationBulkDto = {
  data:CreateNotificationDto[]
}

export type SendNotificationDto = Omit<CreateNotificationDto,'workspaceId'>

export type SendNotificationBulkDto = {
  data:SendNotificationDto[]
}

export type CreateNotificationEventDto = OmitRequire<NotificationEvent,'id'|'createdAt'|'updatedAt'|'notificationId','event'>

export type SortingNotificationDto = SortingParamsDto<{
  type?:Sorting,
  templateId?:Sorting,
  workspaceId?:Sorting,
  status?:Sorting,
  channelId?:Sorting,
  scheduledAt?:Sorting,
}>

export type ClausesNotificationDto = WhereClausesDto<{
  search?:StringClause,
  status?:EnumClause<NotificationStatus>,
  type?:EnumClause<ChannelType>,
  workspaceId?:NumberClause,
  channelId?:NumberClause,
  templateId?:NumberClause,
  minScheduledAt?:DateClause,
  maxScheduledAt?:DateClause,
  metadata?:ObjectClause<MetadataClause>
}>

export type QueryNotificationDto = QueryParamsDto<SortingNotificationDto,ClausesNotificationDto>

export type UnsubscribeUrlRequestBodyDto = {
  token:string
}
