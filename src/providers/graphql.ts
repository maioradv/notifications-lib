import { PaginatedGQLQueryDto, Resolvers } from "@maioradv/client-core";

export const ProvidersResolvers:Resolvers<['providers'],['removeProviders']> = {
  query:{
    providers:{
      name:'providers',
      query: `query ProviderList($limit: Int, $after: Int, $before: Int, $sorting: String){
        providers(limit: $limit, after: $after, before: $before, sorting: $sorting){
          edges {
            node {
              id
            }
            cursor
          }
          nodes {
            id
            slug
            name
            channelType
            status
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
    removeProviders:{
      name:'removeProviders',
      query: `mutation ProviderDelete($id: [Int!]!){
        removeProviders(id: $id) {
          count
        }
      }`,
    },   
  }
}

export type QueryProviderGQLDto = PaginatedGQLQueryDto