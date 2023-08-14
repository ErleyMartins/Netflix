import { QueryKey } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { Method, QueryString, Response } from "utils/types";

export interface RequestParams {
  method?: Method;
  endpoint: string;
  queryString?: QueryString;
  queryKey?: QueryKey;
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
