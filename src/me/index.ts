import { AxiosInstance } from "axios";
import { ApiModule } from "@maioradv/client-core";
import Channels from "./channels";
import { Dashboard } from "../dashboards/types";
import { NotificationsConfig } from "../configs/service";
import Notifications from "./notifications";
import Settings from "./settings";
import Stats from "./stats";
import Templates from "./templates";
import Workspaces from "./workspaces";
import WorkspaceTokens from "./workspace-tokens";

export default class Me extends ApiModule {
  readonly channels:Channels;
  readonly notifications:Notifications;
  readonly settings:Settings;
  readonly stats:Stats;
  readonly templates:Templates;
  readonly workspaces:Workspaces;
  readonly workspaceTokens:WorkspaceTokens;

  constructor(client:AxiosInstance){
    super(client)
    this.channels = new Channels(client)
    this.notifications = new Notifications(client)
    this.settings = new Settings(client)
    this.stats = new Stats(client)
    this.templates = new Templates(client)
    this.workspaceTokens = new WorkspaceTokens(client)
    this.workspaces = new Workspaces(client)
  }

  dashboard() {
    return this._call<Dashboard>('get',`/me`)
  }

  config(): Promise<NotificationsConfig> {
    return this._call('get','/me/configs')
  } 
}