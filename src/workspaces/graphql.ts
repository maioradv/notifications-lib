import { PaginatedGQLQueryDto, Resolvers } from "@maioradv/client-core";

export const WorkspacesResolvers:Resolvers<['workspaces'],['removeWorkspaces','archiveWorkspace']> = {
  query:{
    workspaces:{
      name:'workspaces',
      query: `query WorkspaceList($limit: Int, $after: Int, $before: Int, $sorting: String){
        workspaces(limit: $limit, after: $after, before: $before, sorting: $sorting){
          edges {
            node {
              id
            }
            cursor
          }
          nodes {
            id
            name
            description
            dashboardId
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
    removeWorkspaces:{
      name:'removeWorkspaces',
      query: `mutation WorkspaceDelete($id: [Int!]!){
        removeWorkspaces(id: $id) {
          count
        }
      }`,
    },   
    archiveWorkspace:{
      name:'archiveWorkspace',
      query: `mutation WorkspaceArchive($id: Int!){
        archiveWorkspace(id: $id) {
          id
          name
          description
          dashboardId
          deletedAt
          createdAt
          updatedAt
        }
      }`,
    },  
  }
}

export type QueryWorkspaceGQLDto = PaginatedGQLQueryDto