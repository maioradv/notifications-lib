import { Resolvers } from "../core/types/resolver";

export const DashboardsResolvers:Resolvers<[],['removeDashboard','initDashboard']> = {
  query:{
    
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