import { RestApiModuleI, ApiModule, GraphApiModuleI, queryParams, BulkResponse, PaginatedDto, PaginatedGQL } from "@maioradv/client-core";
import { ChannelPreset, CreateChannelPresetDto, QueryChannelPresetDto, UpdateChannelPresetDto } from "./types";

export default class ChannelPresets extends ApiModule implements RestApiModuleI {
  create(args:CreateChannelPresetDto): Promise<ChannelPreset> {
    return this._call('post','/channel-presets',args)
  }

  findAll(args:QueryChannelPresetDto = {}): Promise<PaginatedDto<ChannelPreset>> {
    return this._call('get','/channel-presets',queryParams(args))
  } 

  findOne(id:number): Promise<ChannelPreset> {
    return this._call('get',`/channel-presets/${id}`)
  }

  update(id:number,data:UpdateChannelPresetDto): Promise<ChannelPreset> {
    return this._call('patch',`/channel-presets/${id}`,data)
  }

  remove(id:number): Promise<ChannelPreset> {
    return this._call('delete',`/channel-presets/${id}`)
  }
}