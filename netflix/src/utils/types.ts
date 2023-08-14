import { AxiosResponse, GenericAbortSignal } from "axios";

export type QueryString = unknown;
export type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface Response<TData> {
  data: AxiosResponse<TData>["data"];
  status: AxiosResponse<TData>["status"];
}

export interface Params {
  queryString?: QueryString;
  payload?: unknown;
  signal?: GenericAbortSignal | undefined;
}
