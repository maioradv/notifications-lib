import { RestApiModuleI, ApiModule, queryParams, PaginatedDto } from "@maioradv/client-core";
import { WorkspaceToken, CreateWorkspaceTokenDto, QueryWorkspaceTokenDto, UpdateWorkspaceTokenDto } from "./types";

export default class WorkspaceTokens extends ApiModule implements RestApiModuleI {
  create(args:CreateWorkspaceTokenDto): Promise<WorkspaceToken> {
    return this._call('post','/workspace-tokens',args)
  }

  findAll(args:QueryWorkspaceTokenDto = {}): Promise<PaginatedDto<WorkspaceToken>> {
    return this._call('get','/workspace-tokens',queryParams(args))
  } 

  findOne(id:number): Promise<WorkspaceToken> {
    return this._call('get',`/workspace-tokens/${id}`)
  }

  update(id:number,data:UpdateWorkspaceTokenDto): Promise<WorkspaceToken> {
    return this._call('patch',`/workspace-tokens/${id}`,data)
  }

  remove(id:number): Promise<WorkspaceToken> {
    return this._call('delete',`/workspace-tokens/${id}`)
  }
}