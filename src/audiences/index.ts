import { ApiModule, RestApiModuleI, GraphApiModuleI, PaginatedDto, PaginatedGQL, BulkResponse, queryParams } from "@maioradv/client-core";
import { Audience, CreateAudienceDto, FindAllAudienceDto, FindOneAudienceDto, PushAudienceDto, PutAudienceBatchDto, PutAudienceDto, QueryAudienceDto, UpdateAudienceDto } from "./types";
import { AudiencesResolvers, QueryAudienceGQLDto } from "./graphql";
import { AudienceEvent, CreateAudienceEventDto } from "./types";

export default class Audiences extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(args: CreateAudienceDto): Promise<Audience> {
    return this._call('post', '/audiences', args);
  }
  put(args: PutAudienceDto): Promise<Audience> {
    return this._call('put', '/audiences', args);
  }
  putBatch(args: PutAudienceBatchDto): Promise<void> {
    return this._call('put', '/audiences/batch', args);
  }
  findAll(args: QueryAudienceDto = {}): Promise<PaginatedDto<FindAllAudienceDto>> {
    return this._call('get', '/audiences', queryParams(args));
  }
  findOne(id: number): Promise<FindOneAudienceDto> {
    return this._call('get', `/audiences/${id}`);
  }
  update(id: number, data: UpdateAudienceDto): Promise<Audience> {
    return this._call('patch', `/audiences/${id}`, data);
  }
  remove(id: number): Promise<Audience> {
    return this._call('delete', `/audiences/${id}`);
  }
  createEvent(audienceId: number, args: CreateAudienceEventDto): Promise<AudienceEvent> {
    return this._call('post', `/audiences/${audienceId}/events`, args);
  }
  findAllEvents(audienceId: number): Promise<AudienceEvent[]> {
    return this._call('get', `/audiences/${audienceId}/events`);
  }
  list(args: QueryAudienceGQLDto = {}): Promise<PaginatedGQL<Audience>> {
    return this._graphql(AudiencesResolvers.query.audiences, args);
  }
  removeMany(id: number | number[]): Promise<BulkResponse> {
    return this._graphql(AudiencesResolvers.mutation.removeAudiences, { id });
  }
  archiveMany(id: number | number[]): Promise<BulkResponse> {
    return this._graphql(AudiencesResolvers.mutation.archiveAudiences, { id });
  }
  restoreMany(id: number | number[]): Promise<BulkResponse> {
    return this._graphql(AudiencesResolvers.mutation.restoreAudiences, { id });
  }
  unsubscribe(token:string): Promise<Audience> {
    return this._graphql(AudiencesResolvers.mutation.unsubscribeAudience, { token });
  }
  archive(id: number): Promise<Audience> {
    return this._graphql(AudiencesResolvers.mutation.archiveAudience, { id });
  }
  restore(id: number): Promise<Audience> {
    return this._graphql(AudiencesResolvers.mutation.restoreAudience, { id });
  }
  /**
   * @requires WorkspaceToken - Context Type
   */
  push(audience: PushAudienceDto): Promise<Audience> {
    return this._graphql(AudiencesResolvers.mutation.pushAudience, { audience });
  }
}