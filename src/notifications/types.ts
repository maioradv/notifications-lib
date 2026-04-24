import { OmitRequire } from "@maioradv/types";
import { ChannelType } from "../channels/types";
import { BooleanClause, StringClause, WhereClausesDto, Sorting, SortingParamsDto, QueryParamsDto, EnumClause, NumberClause, ObjectClause, DateClause } from "@maioradv/client-core";

export enum NotificationStatus {
  pending = 'pending',
  queued = 'queued',
  delayed = 'delayed',
  sent = 'sent',
  failed = 'failed',
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
    body:string
  }
}

export type ContentPush = {
  type:'push',
  push:{
    title:string,
    body:string,
    data?:Record<string,any>,
    categoryId?:string,
    priority?:string,
    channelId?:string
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
} & (RecipientSmtp | RecipientWhatsappWeb | RecipientExpo | RecipientVapid)

export type Notification = {
  id: number;
  status: NotificationStatus;
  content: NotificationContent|null;
  templateId: number|null;
  workspaceId: number;
  channelId:number|null;
  type: ChannelType;
  recipient: NotificationRecipient;
  variables: Record<string,any>;
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

export type CreateNotificationDto = OmitRequire<Notification,'id'|'createdAt'|'updatedAt'|'status'|'type'|'content'|'templateId','workspaceId'|'recipient'> & (WithContent | WithTemplate)
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
}>

export type QueryNotificationDto = QueryParamsDto<SortingNotificationDto,ClausesNotificationDto>
