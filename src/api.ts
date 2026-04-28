export enum ApiVersion {
  March26 = '2026-03',
  Unstable = 'unstable'
}

export enum ApiHost {
  main = 'api.notifications.maior.cloud'
}

export const LATEST_API_VERSION = ApiVersion.March26
export const SUPPORTED_API_VERSIONS = [
  LATEST_API_VERSION,
  ApiVersion.Unstable
]

export enum ApiHeader {
  Authorization = 'Authorization',
  ApiVersion = 'X-Api-Version',
  ApiTenant = 'X-Workspace-ID'
}