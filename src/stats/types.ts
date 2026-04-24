
export enum TimeInterval {
  daily = 'daily',
  montly = 'monthly'
}

export type MetricData = {
  total:number;
  sent:number;
  failed:number;
}

export type MetricRecord = {
  id:number;
  interval:TimeInterval;
  start:Date;
  end:Date;
  data:MetricData;
  createdAt:Date;
  updatedAt:Date;
}

export type DashboardMetric = MetricData & {
  dashboardId:number;
}

export type WorkspaceMetric = MetricData & {
  workspaceId:number;
}

export type ChannelMetric = MetricData & {
  channelId:number;
}

export class QueryMetricsDto {
  interval: TimeInterval;
  from: Date;
  to: Date;
}
