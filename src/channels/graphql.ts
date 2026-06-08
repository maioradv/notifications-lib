import { PaginatedGQLQueryDto, Resolvers } from "@maioradv/client-core";

export const ChannelsResolvers:Resolvers<['channels'],['removeChannels','archiveChannel']> = {
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
            options
            config
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
    archiveChannel:{
      name:'archiveChannel',
      query: `mutation ChannelArchive($id: Int!){
        archiveChannel(id: $id) {
          id
          status
          type
          options
          config
          default
          description
          workspaceId
          deletedAt
          createdAt
          updatedAt
        }
      }`,
    },  
  }
}

export type QueryChannelGQLDto = PaginatedGQLQueryDto