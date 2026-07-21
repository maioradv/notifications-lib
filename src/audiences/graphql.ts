import { PaginatedGQLQueryDto, Resolvers } from "@maioradv/client-core";

export const AudiencesResolvers: Resolvers<['audiences'],[
  'archiveAudience','restoreAudiences','archiveAudiences',
  'removeAudiences','unsubscribeAudience','restoreAudience',
  'pushAudience'
]> = {
  query: {
    audiences: {
      name: 'audiences',
      query: `query AudienceList($limit: Int, $after: Int, $before: Int, $sorting: String) {
        audiences(limit: $limit, after: $after, before: $before, sorting: $sorting) {
          edges { node { id } cursor }
          nodes {
            id
            name
            phone
            email
            lastName
            customerId
            uuid
            locale
            metadata
            workspaceId
            createdAt
            updatedAt
            deletedAt
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
  mutation: {
    removeAudiences: {
      name: 'removeAudiences',
      query: `mutation AudienceDelete($id: [Int!]!) {
        removeAudiences(id: $id) { count }
      }`,
    },
    archiveAudiences: {
      name: 'archiveAudiences',
      query: `mutation AudienceArchive($id: [Int!]!) {
        archiveAudiences(id: $id) { count }
      }`,
    },
    restoreAudiences: {
      name: 'restoreAudiences',
      query: `mutation AudienceRestore($id: [Int!]!) {
        restoreAudiences(id: $id) { count }
      }`,
    },
    pushAudience: {
      name: 'pushAudience',
      query: `mutation AudiencePush($audience: PushAudienceDto!) {
        pushAudience(audience: $audience) {  
          id
          name
          phone
          email
          lastName
          customerId
          uuid
          locale
          metadata
          workspaceId
          createdAt
          updatedAt
          deletedAt
        }
      }`,
    },
    unsubscribeAudience: {
      name: 'unsubscribeAudience',
      query: `mutation AudienceUnsubscribe($token: String!) {
        unsubscribeAudience(token: $token) {  
          id
          name
          phone
          email
          lastName
          customerId
          uuid
          locale
          metadata
          workspaceId
          createdAt
          updatedAt
          deletedAt
        }
      }`,
    },
    restoreAudience: {
      name: 'restoreAudience',
      query: `mutation AudienceRestore($id: Int!) {
        restoreAudience(id: $id) {  
          id
          name
          phone
          email
          lastName
          customerId
          uuid
          locale
          metadata
          workspaceId
          createdAt
          updatedAt
          deletedAt
        }
      }`,
    },
    archiveAudience: {
      name: 'archiveAudience',
      query: `mutation AudienceArchive($id: Int!) {
        archiveAudience(id: $id) {  
          id
          name
          phone
          email
          lastName
          customerId
          uuid
          locale
          metadata
          workspaceId
          createdAt
          updatedAt
          deletedAt
        }
      }`,
    },
  },
};

export type QueryAudienceGQLDto = PaginatedGQLQueryDto;