import { WorkspaceToken } from "../workspaces/types";
import { RestApiModuleI, ApiModule, queryParams, PaginatedDto } from "@maioradv/client-core";
import { CreateOwnWorkspaceTokenDto, UpdateOwnWorkspaceTokenDto, QueryOwnWorkspaceTokenDto } from "./types";

export default class WorkspaceTokens extends ApiModule implements RestApiModuleI {
  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  create(args:CreateOwnWorkspaceTokenDto): Promise<WorkspaceToken> {
    return this._call('post','/me/workspace-tokens',args)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  findAll(args:QueryOwnWorkspaceTokenDto = {}): Promise<PaginatedDto<WorkspaceToken>> {
    return this._call('get','/me/workspace-tokens',queryParams(args))
  } 

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  findOne(id:number): Promise<WorkspaceToken> {
    return this._call('get',`/me/workspace-tokens/${id}`)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  update(id:number,data:UpdateOwnWorkspaceTokenDto): Promise<WorkspaceToken> {
    return this._call('patch',`/me/workspace-tokens/${id}`,data)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  remove(id:number): Promise<WorkspaceToken> {
    return this._call('delete',`/me/workspace-tokens/${id}`)
  }
}