import { ApiClient } from "./client";
import { ApiConfigs } from "./config";

export class NotificationsApiClient extends ApiClient {}
export type NotificationsApiConfigs = ApiConfigs

export * from './types'
export * from './error'
export * from './auth/types'
export * from './apitokens/types'
export * from './configs/types'
export * from './roles/types'
export * from './settings/types'
export * from './channels/types'

export * from './core/dto/pagination'

export { NotificationsPlan, NotificationsConfig } from './configs/service'

export function notificationsApiClient(opt:NotificationsApiConfigs): NotificationsApiClient {
  return new NotificationsApiClient(opt)
}