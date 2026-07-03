import { PaginatedGQLQueryDto, Resolvers } from "@maioradv/client-core";

export const WebhooksResolvers:Resolvers<['webhooks'],['removeWebhooks']> = {
  query:{
    webhooks:{
      name:'webhooks',
      query: `query WebhookList($limit: Int, $after: Int, $before: Int, $sorting: String){
        webhooks(limit: $limit, after: $after, before: $before, sorting: $sorting){
          edges {
            node {
              id
            }
            cursor
          }
          nodes {
            id
            url
            secret
            active
            description
            workspaceId
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
    removeWebhooks:{
      name:'removeWebhooks',
      query: `mutation WebhookDelete($id: [Int!]!){
        removeWebhooks(id: $id) {
          count
        }
      }`,
    },   
  }
}

export type QueryWebhookGQLDto = PaginatedGQLQueryDto