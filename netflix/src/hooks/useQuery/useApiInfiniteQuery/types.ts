import { InfiniteData, QueryKey } from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
  Method,
  QueryString,
  RequestQueryProps,
  ResponseInfinite,
} from "../types";

export interface RequestParams {
  method?: Method;
  endpoint: string;
  queryString?: QueryString;
  queryKey?: QueryKey;
}

export interface RequestInfiniteQueryProps<TData, TError>
  extends Omit<RequestQueryProps<TData, TError>, "onSuccess" | "onSettled"> {
  onSuccess?: (data: InfiniteData<ResponseInfinite<TData>>) => void;
  onSettled?:
    | ((
        data: InfiniteData<ResponseInfinite<TData>> | undefined,
        error: AxiosError<TError, TData> | null
      ) => void)
    | undefined;
}
