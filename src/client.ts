import axios, { AxiosInstance } from "axios";
import { ValidatedApiConfigs, ApiConfigs, validateConfigs } from "./config";
import { ApiHeader } from "./types";
import { ClientApiI } from "./model";
import Auth from "./auth";
import { AccessTokenDto } from "./auth/types";
import { AuthError } from "./error";
import ApiTokens from "./apitokens";
import Configs from "./configs";
import Roles from "./roles";
import Settings from "./settings";
import Channels from "./channels";
import Dashboards from "./dashboards";
import Notifications from "./notifications";
import Providers from "./providers";
import { SseHandler } from "./sse";

export class ApiClient implements ClientApiI
{
  protected client:AxiosInstance;
  protected configApi:ValidatedApiConfigs;
  authentication:Auth;
  apiTokens:ApiTokens;
  configs:Configs;
  roles:Roles;
  settings:Settings;
  channels:Channels;
  dashboards:Dashboards;
  notifications:Notifications;
  providers:Providers;
  sse:SseHandler;

  constructor(protected config: ApiConfigs) {
    this.configApi = validateConfigs(this.config)
    this.client = this._initClient()
    this._initModules()
  }

  protected _initClient(): AxiosInstance {
    const client = axios.create()
    client.defaults.baseURL = this.configApi.sandbox ? `http://${this.configApi.host}` : `https://${this.configApi.host}`;
    client.defaults.headers.common[ApiHeader.ApiVersion] = this.configApi.version
    client.defaults.headers.common['Content-Type'] = 'application/json'
    return this.configApi.axios ? this.configApi.axios(client) : client
  }

  protected _initModules() {
    this.authentication = new Auth(this.client)
    this.apiTokens = new ApiTokens(this.client)
    this.configs = new Configs(this.client)
    this.roles = new Roles(this.client)
    this.settings = new Settings(this.client)
    this.channels = new Channels(this.client)
    this.dashboards = new Dashboards(this.client)
    this.notifications = new Notifications(this.client)
    this.providers = new Providers(this.client)
    this.sse = new SseHandler(this.client)
  }

  _setAccessToken(accessToken:string) {
    this.client.defaults.headers.common[ApiHeader.Authorization] = `Bearer ${accessToken}`
    this._initSse()
  }

  setTenantID(id:number) {
    this.client.defaults.headers.common[ApiHeader.ApiTenant] = `${id}`
    this._initSse()
  }

  _initSse() {
    if(this.configApi.onSseEvent) {
      this.sse.connect(this.configApi.onSseEvent)
    }
  }

  async auth(): Promise<AccessTokenDto> {
    if(!this.configApi.credentials) throw new AuthError('Missing credentials')
    const access = 
      this.configApi.credentials.apiToken ? await this.authentication.token(this.configApi.credentials.apiToken) : 
      this.configApi.credentials.workspaceToken ? await this.authentication.workspace(this.configApi.credentials.workspaceToken) : 
      this.configApi.credentials.customer ? await this.authentication.jwt(this.configApi.credentials.customer.accessToken,this.configApi.credentials.customer.dashboardId) :
      await this.authentication.jwt(this.configApi.credentials.operator)
    this._setAccessToken(access.access_token)
    return access
  }

  async jwt(accessToken:string,dashboardId?:number): Promise<AccessTokenDto> {
    const access = await this.authentication.jwt(accessToken,dashboardId)
    this._setAccessToken(access.access_token)
    return access
  }
}