import { PaginatedGQLQueryDto, Resolvers } from "@maioradv/client-core";

export const TemplatesResolvers:Resolvers<['templates'],['removeTemplates']> = {
  query:{
    templates:{
      name:'templates',
      query: `query TemplateList($limit: Int, $after: Int, $before: Int, $sorting: String){
        templates(limit: $limit, after: $after, before: $before, sorting: $sorting){
          edges {
            node {
              id
            }
            cursor
          }
          nodes {
            id
            namespace
            slug
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
            translations {
              key
              locale
              value
            }
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
    removeTemplates:{
      name:'removeTemplates',
      query: `mutation TemplateDelete($id: [Int!]!){
        removeTemplates(id: $id) {
          count
        }
      }`,
    },   
  }
}

export type QueryTemplateGQLDto = PaginatedGQLQueryDto