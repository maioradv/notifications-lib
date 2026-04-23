import { PaginatedDto, PaginatedGQL } from "../core/dto/pagination";
import { RemoveGQL } from "../core/model/remove-gql.response";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule, GraphApiModuleI } from "../model";
import { ProvidersResolvers, QueryProviderGQLDto } from "./graphql";
import { Provider, ProviderEvent, CreateProviderDto, CreateProviderEventDto, UpdateProviderDto, QueryProviderDto } from "./types";

export default class Providers extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(args:CreateProviderDto): Promise<Provider> {
    return this._call('post','/providers',args)
  }

  findAll(args:QueryProviderDto = {}): Promise<PaginatedDto<Provider>> {
    return this._call('get','/providers',queryParams(args))
  } 

  findOne(id:number): Promise<Provider> {
    return this._call('get',`/providers/${id}`)
  }

  update(id:number,data:UpdateProviderDto): Promise<Provider> {
    return this._call('patch',`/providers/${id}`,data)
  }

  remove(id:number): Promise<Provider> {
    return this._call('delete',`/providers/${id}`)
  }

  createEvent(id:number,args:CreateProviderEventDto): Promise<ProviderEvent> {
    return this._call('post',`/providers/${id}/event`,args)
  }

  findAllEvents(id:number): Promise<ProviderEvent[]> {
    return this._call('get',`/providers/${id}/event`)
  }
  
  list(args:QueryProviderGQLDto = {}): Promise<PaginatedGQL<Provider>> {
    return this._graphql(ProvidersResolvers.query.providers,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql(ProvidersResolvers.mutation.removeProviders,{
      id
    })
  }
}