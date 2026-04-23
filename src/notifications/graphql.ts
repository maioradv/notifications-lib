import { PaginatedGQLQueryDto } from "../core/dto/pagination";
import { Resolvers } from "../core/types/resolver";

export const NotificationsResolvers:Resolvers<['notifications'],['removeNotifications']> = {
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
            content {
              type
              email {
                name
                address
                subject
                html
                text
              }
              whatsapp {
                body
              }
              push {
                title
                body
                data
                categoryId
                priority
                channelId
              }
              webpush {
                title
                body
                url
                image
                icon
                topic
              }
            }
            templateId
            workspaceId
            channelId
            type
            recipient {
              provider
              smtp {
                name
                email
              }
              whatsappWeb {
                phone
              }
              expo {
                token
              }
              vapid {
                endpoint
                p256dh
                auth
              }
            }
            variables
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