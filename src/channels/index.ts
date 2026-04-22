import { PaginatedDto, PaginatedGQL } from "../core/dto/pagination";
import { RemoveGQL } from "../core/model/remove-gql.response";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule, GraphApiModuleI } from "../model";
import { ChannelsResolvers, QueryChannelGQLDto } from "./graphql";
import { Channel, CreateChannelDto, QueryChannelDto, UpdateChannelDto, ChannelSession } from "./types";

export default class Channels extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(args:CreateChannelDto): Promise<Channel> {
    return this._call('post','/channels',args)
  }

  findAll(args:QueryChannelDto = {}): Promise<PaginatedDto<Channel>> {
    return this._call('get','/channels',queryParams(args))
  } 

  findOne(id:number): Promise<Channel> {
    return this._call('get',`/channels/${id}`)
  }

  update(id:number,data:UpdateChannelDto): Promise<Channel> {
    return this._call('patch',`/channels/${id}`,data)
  }

  remove(id:number): Promise<Channel> {
    return this._call('delete',`/channels/${id}`)
  }

  auth(id:number): Promise<ChannelSession> {
    return this._call('post',`/channels/${id}/auth`)
  }
  
  list(args:QueryChannelGQLDto = {}): Promise<PaginatedGQL<Channel>> {
    return this._graphql(ChannelsResolvers.query.channels,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql(ChannelsResolvers.mutation.removeChannels,{
      id
    })
  }
}