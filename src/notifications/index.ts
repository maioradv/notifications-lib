import { PaginatedDto, PaginatedGQL } from "../core/dto/pagination";
import { RemoveGQL } from "../core/model/remove-gql.response";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule, GraphApiModuleI } from "../model";
import { NotificationsResolvers, QueryNotificationGQLDto } from "./graphql";
import { Notification, NotificationEvent, CreateNotificationDto, CreateNotificationBulkDto, CreateNotificationEventDto, UpdateNotificationDto, QueryNotificationDto, SendNotificationDto, SendNotificationBulkDto } from "./types";

export default class Notifications extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(args:CreateNotificationDto): Promise<Notification> {
    return this._call('post','/notifications',args)
  }

  createBulk(args:CreateNotificationBulkDto): Promise<void> {
    return this._call('post','/notifications/bulk',args)
  }

  findAll(args:QueryNotificationDto = {}): Promise<PaginatedDto<Notification>> {
    return this._call('get','/notifications',queryParams(args))
  } 

  findOne(id:number): Promise<Notification> {
    return this._call('get',`/notifications/${id}`)
  }

  update(id:number,data:UpdateNotificationDto): Promise<Notification> {
    return this._call('patch',`/notifications/${id}`,data)
  }

  remove(id:number): Promise<Notification> {
    return this._call('delete',`/notifications/${id}`)
  }

  createEvent(id:number,args:CreateNotificationEventDto): Promise<NotificationEvent> {
    return this._call('post',`/notifications/${id}/event`,args)
  }

  findAllEvents(id:number): Promise<NotificationEvent[]> {
    return this._call('get',`/notifications/${id}/event`)
  }
  
  list(args:QueryNotificationGQLDto = {}): Promise<PaginatedGQL<Notification>> {
    return this._graphql(NotificationsResolvers.query.notifications,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql(NotificationsResolvers.mutation.removeNotifications,{
      id
    })
  }

  send(args:SendNotificationDto): Promise<Notification> {
    return this._call('post','/notifications/send',args)
  }

  sendBulk(args:SendNotificationBulkDto): Promise<void> {
    return this._call('post','/notifications/send/bulk',args)
  }
}