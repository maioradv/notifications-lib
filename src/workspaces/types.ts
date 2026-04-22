import { ApiToken } from "../apitokens/types";

export type WorkspaceToken = ApiToken & {
  workspaceId: number;
}