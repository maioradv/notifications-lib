import { ApiModule } from "@maioradv/client-core";
import { DashboardMetric, WorkspaceMetric, ChannelMetric, QueryMetricsDto, GenerateMetricsDto } from "./types";

export default class Stats extends ApiModule {

  generateMetrics(args:GenerateMetricsDto): Promise<void> {
    return this._call('post',`/stats`,args)
  }

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