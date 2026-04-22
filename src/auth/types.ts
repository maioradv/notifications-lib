import { ApiToken } from "../apitokens/types";
import { WorkspaceToken } from "../workspaces/types";

type Customer = {
  id: number;
  email: string;
  password: string;
  name: string|null;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

type Operator = {
  id: number;
  operatorRoleId: number;
  email: string;
  password: string;
  name: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type AccessTokenDto = {
  access_token:string;
  token_type:string;
  expires_in:number;
  refresh_token?:string;
}

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

export type JwtPayload = {
  sub: string;
  aud: string[];
  scope: string[];
  iat: number;
  exp: number;
  iss: string;
  context: JwtPayloadContext;
}

export type Jwt = {
  payload:JwtPayload;
  Customer?:Customer;
  ApiToken?:ApiToken;
  Operator?:Operator;
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

  send_notifications = 'send_notifications'
}