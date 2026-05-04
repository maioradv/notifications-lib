import { RestApiModuleI, ApiModule, queryParams, PaginatedDto } from "@maioradv/client-core";
import { Notification, NotificationEvent } from "../notifications/types";
import { UpdateOwnNotificationDto, QueryOwnNotificationDto } from "./types";

export default class Notifications extends ApiModule {
  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  findAll(args:QueryOwnNotificationDto = {}): Promise<PaginatedDto<Notification>> {
    return this._call('get','/me/notifications',queryParams(args))
  } 

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  findOne(id:number): Promise<Notification> {
    return this._call('get',`/me/notifications/${id}`)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  update(id:number,data:UpdateOwnNotificationDto): Promise<Notification> {
    return this._call('patch',`/me/notifications/${id}`,data)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  remove(id:number): Promise<Notification> {
    return this._call('delete',`/me/notifications/${id}`)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  findAllEvents(id:number): Promise<NotificationEvent> {
    return this._call('get',`/me/notifications/${id}/events`)
  }
}