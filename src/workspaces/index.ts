import { RestApiModuleI, ApiModule, GraphApiModuleI, queryParams, RemoveGQL, PaginatedDto, PaginatedGQL } from "@maioradv/client-core";
import { WorkspacesResolvers, QueryWorkspaceGQLDto } from "./graphql";
import { Workspace, CreateWorkspaceDto, QueryWorkspaceDto, UpdateWorkspaceDto } from "./types";

export default class Workspaces extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(args:CreateWorkspaceDto): Promise<Workspace> {
    return this._call('post','/workspaces',args)
  }

  findAll(args:QueryWorkspaceDto = {}): Promise<PaginatedDto<Workspace>> {
    return this._call('get','/workspaces',queryParams(args))
  } 

  findOne(id:number): Promise<Workspace> {
    return this._call('get',`/workspaces/${id}`)
  }

  update(id:number,data:UpdateWorkspaceDto): Promise<Workspace> {
    return this._call('patch',`/workspaces/${id}`,data)
  }

  remove(id:number): Promise<Workspace> {
    return this._call('delete',`/workspaces/${id}`)
  }

  list(args:QueryWorkspaceGQLDto = {}): Promise<PaginatedGQL<Workspace>> {
    return this._graphql(WorkspacesResolvers.query.workspaces,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql(WorkspacesResolvers.mutation.removeWorkspaces,{
      id
    })
  }
}