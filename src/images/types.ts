import { ReadStream } from "fs";
import { BooleanClause, StringClause, WhereClausesDto, Sorting, SortingParamsDto, QueryParamsDto, NumberClause, ObjectClause } from "@maioradv/client-core";
import { Metafield, OmitRequire, Translation, WithRelation, WithRelations } from "@maioradv/types";

export type Image = {
  id: number;
  checksum: string;
  mimeType: string;
	size: number;
	height: number;
	src: string;
	width: number;
  workspaceId: number;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateImageDto = {
  file:ReadStream,
  workspaceId:number
}

export type SortingImageDto = SortingParamsDto<{
  src?:Sorting,
  size?: Sorting,
  width?: Sorting,
  height?: Sorting,
  mimeType?: Sorting,
}>

export type ClausesImageDto = WhereClausesDto<{
  src?:StringClause,
  worskpaceId?:NumberClause
}>

export type QueryImageDto = QueryParamsDto<SortingImageDto,ClausesImageDto>