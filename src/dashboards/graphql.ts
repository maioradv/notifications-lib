import { PaginatedGQLQueryDto, Resolvers } from "@maioradv/client-core";

export const DashboardsResolvers:Resolvers<['dashboard'],['removeDashboard','initDashboard']> = {
  query:{
    dashboard:{
      name:'dashboard',
      query: `query Dashboard($id: Int!){
        dashboard(id: $id) {
          id
          slug
          name
          deletedAt
          createdAt
          updatedAt
        }
      }`,
    },  
  },
  mutation:{
    removeDashboard:{
      name:'removeDashboard',
      query: `mutation DashboardDelete($id: Int!){
        removeDashboard(id: $id) {
          id
          slug
          name
          deletedAt
          createdAt
          updatedAt
        }
      }`,
    },  
    initDashboard:{
      name:'initDashboard',
      query: `mutation ConfigInit($id: Int!, $slug: String!, $name: String!){
        initDashboard(id: $id, slug: $slug, name: $name) {
          id
          slug
          name
          deletedAt
          createdAt
          updatedAt
        }
      }`,
    },   
  }
}