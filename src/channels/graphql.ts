import { PaginatedGQLQueryDto } from "../core/dto/pagination";
import { Resolvers } from "../core/types/resolver";

export const ChannelsResolvers:Resolvers<['channels'],['removeChannels']> = {
  query:{
    channels:{
      name:'channels',
      query: `query ChannelList($limit: Int, $after: Int, $before: Int, $sorting: String){
        channels(limit: $limit, after: $after, before: $before, sorting: $sorting){
          edges {
            node {
              id
            }
            cursor
          }
          nodes {
            id
            status
            type
            options {
              workerOptions {
                concurrency
                humanization
                limiter {
                  duration
                  max
                }
              }
            }
            config {
              provider
              expo {
                token
              }
              smtp {
                auth {
                  pass
                  user
                }
                host
                port
                secure
              }
              vapid {
                privateKey
                publicKey
                subject
              }
              whatsappWeb {
                phone
              }
            }
            default
            description
            workspaceId
            deletedAt
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
  },
  mutation:{
    removeChannels:{
      name:'removeChannels',
      query: `mutation ChannelDelete($id: [Int!]!){
        removeChannels(id: $id) {
          count
        }
      }`,
    },   
  }
}

export type QueryChannelGQLDto = PaginatedGQLQueryDto