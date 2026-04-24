import { ApiModule } from "@maioradv/client-core";
import { DashboardMetric, WorkspaceMetric, ChannelMetric, QueryMetricsDto } from "./types";

export default class Stats extends ApiModule {

  dashboardMetrics(id:number,args:QueryMetricsDto): Promise<DashboardMetric[]> {
    return this._call('get',`/stats/dashboards/${id}/metrics`,args)
  }

  workspaceMetrics(id:number,args:QueryMetricsDto): Promise<WorkspaceMetric[]> {
    return this._call('get',`/stats/workspaces/${id}/metrics`,args)
  }

  channelMetrics(id:number,args:QueryMetricsDto): Promise<ChannelMetric[]> {
    return this._call('get',`/stats/channels/${id}/metrics`,args)
  }
}