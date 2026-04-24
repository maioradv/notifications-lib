import { PaginatedGQLQueryDto, Resolvers } from "@maioradv/client-core";

export const ConfigsResolvers:Resolvers<['configs','Config'],['removeConfigs','initConfig']> = {
  query:{
    configs:{
      name:'configs',
      query: `query ConfigList($limit: Int, $after: Int, $before: Int, $sorting: String){
        configs(limit: $limit, after: $after, before: $before, sorting: $sorting){
          edges {
            node {
              id
            }
            cursor
          }
          nodes {
            id
            name
            value
            customValue
            description
            dashboardId
            translations {
              key
              locale
              value
            }
            metafields {
              key
              value
            }
            createdAt
            updatedAt
          }
          meta {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }`,
    },
    Config:{
      name:'Config',
      query:`query ConfigService($dashboardId: Int!){
        Config(dashboardId: $dashboardId){
          allowedChannels
          allowedProviders
          maxWorkspaces
          maxChannelsPerType
          limits {
            channelType
            rateLimit
            rateInterval
          }
          plan
        }
      }`
    }
  },
  mutation:{
    removeConfigs:{
      name:'removeConfigs',
      query: `mutation ConfigDelete($id: [Int!]!){
        removeConfigs(id: $id) {
          count
        }
      }`,
    },  
    initConfig:{
      name:'initConfig',
      query: `mutation ConfigInit($dashboardId: Int!, $plan: NotificationsPlan!, $config: NotificationsConfigDto){
        initConfig(dashboardId: $dashboardId, plan: $plan, config: $config) {
          id
          name
          value
          customValue
          description
          translations {
            key
            locale
            value
          }
          metafields {
            key
            value
          }
          createdAt
          updatedAt
        }
      }`,
    },   
  }
}

export type QueryConfigGQLDto = PaginatedGQLQueryDto