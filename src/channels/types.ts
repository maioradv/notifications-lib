import { BooleanClause, StringClause, WhereClausesDto, Sorting, SortingParamsDto, QueryParamsDto, EnumClause, NumberClause } from "@maioradv/client-core";
import { OmitRequire } from '@maioradv/types'

export enum ChannelType {
  email = 'email',
  whatsapp = 'whatsapp',
  push = 'push',
  webpush = 'webpush',
}

export enum ChannelStatus {
  active = 'active',
  disabled = 'disabled',
  error = 'error',
}

export enum ChannelSessionStatus {
  pending = 'pending',
  authenticated = 'authenticated',
  ready = 'ready',
}

export enum Humanization {
  low = 'low',
  medium = 'medium',
  high = 'high',
}

export type Limiter = {
  duration:number;
  max:number;
}

export type WorkerOptions = {
  concurrency?:number;
  limiter?:Limiter;
  humanization?:Humanization;
}

export type ChannelOptions = {
  workerOptions?:WorkerOptions;
}

export enum ChannelProvider {
  smtp = 'smtp',
  expo = 'expo',
  vapid = 'vapid',
  whatsappWeb = 'whatsappWeb',
  baileys = 'baileys',
  waha = 'waha'
}

export type ConfigSmtp = {
  provider:'smtp',
  smtp:{
    host: string,
    port: number,
    secure: boolean,
    auth: {
      user: string,
      pass: string,
    }
  }
}

export type ConfigExpo = {
  provider:'expo',
  expo:{
    token:string
  }
}

export type ConfigVapid = {
  provider:'vapid',
  vapid:{
    subject: string,
    publicKey: string,
    privateKey: string,
  }
}

export type ConfigWhatsappWeb = {
  provider:'whatsappWeb',
  whatsappWeb:{
    phone?:string;
  }
}

export type ConfigBaileys = {
  provider:'baileys',
  baileys:{
    phone?:string;
  }
}

type ConfigWaha = {
  provider:'waha',
  waha:{
    host:string,
    apiKey:string
  }
}

export type ChannelConfig = ConfigSmtp | ConfigExpo | ConfigVapid | ConfigWhatsappWeb | ConfigBaileys | ConfigWaha

export type Channel = {
  id: number;
  status: ChannelStatus;
  type: ChannelType;
  config: ChannelConfig;
  options: ChannelOptions | null;
  default: boolean;
  description: string | null;
  workspaceId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export type ChannelSession = {
  id: number;
  status: ChannelSessionStatus;
  challenge: string | null;
  data: Record<string,any> | null;
  channelId: number;
  createdAt: Date;
  updatedAt: Date;
}

export type ChannelEvent = {
  id: number;
  event: string;
  detail: string | null;
  channelId: number;
  createdAt: Date;
  updatedAt: Date;
}

export type SortingChannelEventDto = SortingParamsDto<{
  createdAt?: Sorting
  updatedAt?: Sorting
  id?: Sorting
}>

export type QueryChannelEventDto = QueryParamsDto<
  SortingChannelEventDto,
  WhereClausesDto<{}>
>


export type CreateChannelDto = OmitRequire<Channel,'id'|'createdAt'|'updatedAt'|'deletedAt','type'|'config'|'workspaceId'>
export type UpdateChannelDto = Partial<CreateChannelDto>

export type SortingChannelDto = SortingParamsDto<{
  type?:Sorting,
  default?:Sorting,
  workspaceId?:Sorting,
}>

export type ClausesChannelDto = WhereClausesDto<{
  search?:StringClause,
  default?:BooleanClause,
  type?:EnumClause<ChannelType>,
  isDeleted?: BooleanClause;
  workspaceId?:NumberClause,
}>

export type QueryChannelDto = QueryParamsDto<SortingChannelDto,ClausesChannelDto>