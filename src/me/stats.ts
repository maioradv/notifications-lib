import { RestApiModuleI, ApiModule, queryParams, PaginatedDto } from "@maioradv/client-core";
import { ChannelMetric, DashboardMetric, QueryMetricsDto, WorkspaceMetric } from "../stats/types";

export default class Stats extends ApiModule {
  metrics(args:QueryMetricsDto): Promise<DashboardMetric[]> {
    return this._call('get','/me/stats/metrics',args)
  } 

  workspaceMetrics(id:number,args:QueryMetricsDto): Promise<WorkspaceMetric[]> {
    return this._call('get',`/me/stats/workspaces/${id}/metrics`,args)
  } 

  channelMetrics(id:number,args:QueryMetricsDto): Promise<ChannelMetric[]> {
    return this._call('get',`/me/stats/channels/${id}/metrics`,args)
  } 
}