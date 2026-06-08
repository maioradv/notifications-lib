import { PaginatedGQLQueryDto, Resolvers } from "@maioradv/client-core";

export const NotificationsResolvers:Resolvers<['notifications','fetchNotification'],['removeNotifications']> = {
  query:{
    notifications:{
      name:'notifications',
      query: `query NotificationList($limit: Int, $after: Int, $before: Int, $sorting: String){
        notifications(limit: $limit, after: $after, before: $before, sorting: $sorting){
          edges {
            node {
              id
            }
            cursor
          }
          nodes {
            id
            status
            token
            content
            templateId
            workspaceId
            channelId
            type
            recipient
            variables
            metadata
            options
            scheduledAt
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
    fetchNotification:{
      name:'fetchNotification',
      query: `query NotificationFetch($token: String!){
        fetchNotification(token: $token) {
          id
          status
          token
          content
          templateId
          workspaceId
          channelId
          type
          recipient
          variables
          metadata
          options
          scheduledAt
          createdAt
          updatedAt
        }
      }`,
    }, 
  },
  mutation:{
    removeNotifications:{
      name:'removeNotifications',
      query: `mutation NotificationDelete($id: [Int!]!){
        removeNotifications(id: $id) {
          count
        }
      }`,
    },   
  }
}

export type QueryNotificationGQLDto = PaginatedGQLQueryDto