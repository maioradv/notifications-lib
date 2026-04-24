import { ApiModule } from "@maioradv/client-core";
import { DashboardsResolvers } from "./graphql";
import { Dashboard, InitDashboardDto } from "./types";

export default class Dashboards extends ApiModule {
  
  init(dto:InitDashboardDto): Promise<Dashboard> {
    return this._graphql(DashboardsResolvers.mutation.initDashboard,dto)
  }

  remove(id:number): Promise<Dashboard> {
    return this._graphql(DashboardsResolvers.mutation.removeDashboard,{id})
  }  
}