import { RestApiModuleI, ApiModule, GraphApiModuleI, queryParams, BulkResponse, PaginatedDto, PaginatedGQL } from "@maioradv/client-core";
import { Notification, SendNotificationDto, SendNotificationBulkDto, CancelNotificationDto } from "./types";

export default class Send extends ApiModule {
  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  create(args:SendNotificationDto): Promise<Notification> {
    return this._call('post','/send',args)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  createBulk(args:SendNotificationBulkDto): Promise<void> {
    return this._call('post','/send/bulk',args)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  cancel(args:CancelNotificationDto): Promise<BulkResponse> {
    return this._call('post','/send/cancel',args)
  }
}