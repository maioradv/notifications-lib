import { RestApiModuleI, ApiModule, GraphApiModuleI, queryParams, RemoveGQL, PaginatedDto, PaginatedGQL } from "@maioradv/client-core";
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
    return this._call('post',`/notifications/${id}/events`,args)
  }

  findAllEvents(id:number): Promise<NotificationEvent[]> {
    return this._call('get',`/notifications/${id}/events`)
  }
  
  list(args:QueryNotificationGQLDto = {}): Promise<PaginatedGQL<Notification>> {
    return this._graphql(NotificationsResolvers.query.notifications,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql(NotificationsResolvers.mutation.removeNotifications,{
      id
    })
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  send(args:SendNotificationDto): Promise<Notification> {
    return this._call('post','/notifications/send',args)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  sendBulk(args:SendNotificationBulkDto): Promise<void> {
    return this._call('post','/notifications/send/bulk',args)
  }
}