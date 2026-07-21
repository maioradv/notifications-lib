import { ApiToken } from "../apitokens/types";
import { WorkspaceToken } from "../workspaces/types";
import Maior from '@maioradv/types'

export type AccessTokenDto = Maior.AccessTokenDto

export enum JwtContextType {
  customer = 'Customer',
  apiToken = 'ApiToken',
  operator = 'Operator',
  workspaceToken = 'WorkspaceToken'
}

export type JwtPayloadContext = {
  type:JwtContextType;
  id:number;
  name:string;
  dashboardId?:number;
}

export type JwtPayload = Maior.JwtPayload<JwtPayloadContext>

export type Jwt = {
  payload:JwtPayload;
  Customer?:Maior.Customer;
  ApiToken?:ApiToken;
  Operator?:Maior.Operator;
  WorkspaceToken?:WorkspaceToken;
}

export enum Permission {
  read_apitokens = 'read_apitokens',
  write_apitokens = 'write_apitokens',
  read_roles = 'read_roles',
  write_roles = 'write_roles',
  read_workspaces = 'read_workspaces',
  write_workspaces = 'write_workspaces',
  read_channels = 'read_channels', 
  write_channels = 'write_channels',
  read_templates = 'read_templates',
  write_templates = 'write_templates',
  read_notifications = 'read_notifications',
  write_notifications = 'write_notifications',
  read_settings = 'read_settings',
  write_settings = 'write_settings',
  read_configs = 'read_configs',
  write_configs = 'write_configs',
  read_stats = 'read_stats',
  read_providers = 'read_providers',
  write_providers = 'write_providers',
  read_dashboards = 'read_dashboards',
  write_dashboards = 'write_dashboards',
  read_workspace_tokens = 'read_workspace_tokens',
  write_workspace_tokens = 'write_workspace_tokens',
  read_images = 'read_images',
  write_images = 'write_images',
  read_webhooks = 'read_webhooks',
  write_webhooks = 'write_webhooks',
  read_audiences = 'read_audiences',
  write_audiences = 'write_audiences',
  read_audience_tags = 'read_audience_tags',
  write_audience_tags = 'write_audience_tags',
  read_campaigns = 'read_campaigns',
  write_campaigns = 'write_campaigns',
  read_segments = 'read_segments',
  write_segments = 'write_segments',

  deploy_dashboards = 'deploy_dashboards',
  deploy_configs = 'deploy_configs',
  deploy_roles = 'deploy_roles',
  deploy_apitokens = 'deploy_apitokens',

  manage_own_workspaces = 'manage_own_workspaces',
  manage_own_tokens = 'manage_own_tokens',
  manage_own_channels = 'manage_own_channels',
  manage_own_templates = 'manage_own_templates',
  manage_own_notifications = 'manage_own_notifications',
  manage_own_settings = 'manage_own_settings',
  manage_own_images = 'manage_own_images',
  manage_own_webhooks = 'manage_own_webhooks',
  manage_own_audiences = 'manage_own_audiences',
  manage_own_campaigns = 'manage_own_campaigns',
  manage_own_segments = 'manage_own_segments',

  send_notifications = 'send_notifications',
  fetch_notifications = 'fetch_notifications',
  push_audiences = 'push_audiences',
  push_audience_events = 'push_audience_events',
}