import { Workspace } from "../workspaces/types";
import { RestApiModuleI, ApiModule, queryParams, PaginatedDto } from "@maioradv/client-core";
import { CreateOwnWorkspaceDto, UpdateOwnWorkspaceDto, QueryOwnWorkspaceDto } from "./types";

export default class Workspaces extends ApiModule implements RestApiModuleI {
  create(args:CreateOwnWorkspaceDto): Promise<Workspace> {
    return this._call('post','/me/workspaces',args)
  }

  findAll(args:QueryOwnWorkspaceDto = {}): Promise<PaginatedDto<Workspace>> {
    return this._call('get','/me/workspaces',queryParams(args))
  } 

  findOne(id:number): Promise<Workspace> {
    return this._call('get',`/me/workspaces/${id}`)
  }

  update(id:number,data:UpdateOwnWorkspaceDto): Promise<Workspace> {
    return this._call('patch',`/me/workspaces/${id}`,data)
  }

  remove(id:number): Promise<Workspace> {
    return this._call('delete',`/me/workspaces/${id}`)
  }
}