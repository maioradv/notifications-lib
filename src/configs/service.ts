import { Nullable } from "@maioradv/types";
import { LimitConfig } from "./types";

export enum NotificationsPlan {
  standard = 'standard',
  plus = 'plus',
  premium = 'premium'
}

export type NotificationsConfig = {
  plan?:NotificationsPlan;
  allowedChannels?:string[],
  allowedProviders?:string[],
  maxWorkspaces?:number;
  maxChannelsPerType?:number;
  limits?:LimitConfig[]
}

export type NotificationsConfigDto = Nullable<NotificationsConfig>