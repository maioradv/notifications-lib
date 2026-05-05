import { RestApiModuleI, ApiModule, GraphApiModuleI, queryParams, RemoveGQL, PaginatedDto, PaginatedGQL } from "@maioradv/client-core";
import { TemplatesResolvers, QueryTemplateGQLDto } from "./graphql";
import { Template, CreateTemplateDto, QueryTemplateDto, UpdateTemplateDto } from "./types";

export default class Templates extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(args:CreateTemplateDto): Promise<Template> {
    return this._call('post','/templates',args)
  }

  findAll(args:QueryTemplateDto = {}): Promise<PaginatedDto<Template>> {
    return this._call('get','/templates',queryParams(args))
  } 

  findOne(id:number): Promise<Template> {
    return this._call('get',`/templates/${id}`)
  }

  update(id:number,data:UpdateTemplateDto): Promise<Template> {
    return this._call('patch',`/templates/${id}`,data)
  }

  remove(id:number): Promise<Template> {
    return this._call('delete',`/templates/${id}`)
  }

  list(args:QueryTemplateGQLDto = {}): Promise<PaginatedGQL<Template>> {
    return this._graphql(TemplatesResolvers.query.templates,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql(TemplatesResolvers.mutation.removeTemplates,{
      id
    })
  }

  /**
   * Open to every access type
   */
  findByKey(namespace:string,name:string): Promise<Template> {
    return this._call('get',`/templates/${namespace}/${name}`)
  }

  removeByKey(namespace:string,name:string): Promise<void> {
    return this._call('delete',`/templates/${namespace}/${name}`)
  }
}