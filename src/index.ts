import { ApiClient } from "./client";
import { ApiConfigs } from "./config";

export class NotificationsApiClient extends ApiClient {}
export type NotificationsApiConfigs = ApiConfigs

export * from './api'
export * from './auth/types'
export * from './apitokens/types'
export * from './configs/types'
export * from './roles/types'
export * from './settings/types'
export * from './channels/types'
export * from './dashboards/types'
export * from './notifications/types'
export * from './providers/types'
export * from './workspaces/types'
export * from './stats/types'
export * from './templates/types'
export * from './me/types'

export { NotificationsPlan, NotificationsConfig } from './configs/service'

export { NotificationsEvents , NotificationsEvent } from './sse'

export function notificationsApiClient(opt:NotificationsApiConfigs): NotificationsApiClient {
  return new NotificationsApiClient(opt)
}