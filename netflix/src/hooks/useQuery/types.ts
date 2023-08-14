import { QueryKey } from "@tanstack/react-query";
import { AxiosError, AxiosResponse, GenericAbortSignal } from "axios";

export type QueryString = unknown;
export type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface ResponseInfinite<TData> {
  data: Array<AxiosResponse<TData>["data"]>;
  status: AxiosResponse<TData>["status"];
}

export interface Response<TData> {
  data: AxiosResponse<TData>["data"];
  status: AxiosResponse<TData>["status"];
}

export interface Params {
  queryString?: QueryString;
  payload?: unknown;
  signal?: GenericAbortSignal | undefined;
}

export interface RequestQueryProps<TData, TError>
  extends Omit<RequestParams, "method"> {
  enabled?: boolean;
  useCache?: boolean;
  onSuccess?: (response: Response<TData>) => void;
  onSettled?: (
    data: Response<TData> | undefined,
    error: AxiosError<TError> | null
  ) => void;
  onError?: (error: AxiosError<TError>) => void;
}

export interface RequestParams {
  method?: Method;
  endpoint: string;
  queryString?: QueryString;
  queryKey?: QueryKey;
}
