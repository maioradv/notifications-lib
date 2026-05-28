import { RestApiModuleI, ApiModule, GraphApiModuleI, PaginatedDto, PaginatedGQL, RemoveGQL, queryParams } from "@maioradv/client-core";
import { CreateOwnChannelDto, QueryOwnImageDto } from "./types";
import { Image } from "../images/types";

export default class Images extends ApiModule {
  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  create(args:CreateOwnChannelDto): Promise<Image> {
    return this._call('post','/images',args,{
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  RNCreate(formData:any): Promise<Image> {
    return this._call('post',`/images`,formData,{
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  findAll(args:QueryOwnImageDto = {}): Promise<PaginatedDto<Image>> {
    return this._call('get','/images',queryParams(args))
  } 

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  findOne(id:number): Promise<Image> {
    return this._call('get',`/images/${id}`)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  remove(id:number): Promise<Image> {
    return this._call('delete',`/images/${id}`)
  }

  /**
   * @requires TenantID - Set Workspace ID with {@link ApiClient.setTenantID}
   */
  removeMany(ids:number[]): Promise<RemoveGQL> {
    return this._call('delete',`/images`,{ids})
  }
}