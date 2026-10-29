import { Channel } from "../channels/types";
import { Workspace } from "../workspaces/types";
import { Dashboard } from "../dashboards/types";
import { Notification } from "../notifications/types";

export enum WebhookSignal {
  channelWhatsappAuth = 'channels.whatsapp.auth',
  notificationStatusChanged = 'notifications.status.changed',
  notificationGroupProcessed = 'notifications.group.processed',
}

export type WebhookSignalMap = {
  'channels.whatsapp.auth': {
    channel:Omit<Channel,'config'>,
    workspace:Workspace,
    dashboard:Dashboard
  },
  'notifications.status.changed': {
    notification:Notification
  },
  'notifications.group.processed': {
    groupId:string,
  }
}

export type WebhookRequestDto<T = WebhookSignalMap> = { 
  [K in keyof T]: {
    signal: K;
    payload: T[K];
  }; 
}[keyof T] & {
  timestamp:number;
}

export enum WebhookRequestHeaders {
  signature = 'X-Webhook-Signature',
  signal = 'X-Webhook-Signal'
}