import { Channel } from "../channels/types";
import { Workspace } from "../workspaces/types";
import { Dashboard } from "../dashboards/types";

export enum WebhookSignal {
  channelWhatsappAuth = 'channels.whatsapp.auth'
}

export type WebhookSignalMap = {
  'channels.whatsapp.auth': {
    channel:Channel,
    workspace:Workspace,
    dashboard:Dashboard
  },
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