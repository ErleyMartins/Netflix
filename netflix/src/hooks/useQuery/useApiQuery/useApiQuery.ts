import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { CACHE_TIME } from "utils/constants";

import { RequestQueryProps, Response } from "../types";
import { axiosCall } from "../fetch";
import { buildQueryKey } from "../helpers";

export function useApiQuery<TData = unknown, TError = unknown>({
  queryKey = undefined,
  useCache = true,
  endpoint,
  queryString,
  enabled,
  onSuccess,
  onError,
  onSettled,
}: RequestQueryProps<TData, TError>): UseQueryResult<
  Response<TData>,
  AxiosError<TError>
> {
  const key = buildQueryKey({ queryKey, endpoint, queryString });

  return useQuery(
    key,
    async ({ signal }) => axiosCall("GET", endpoint, { queryString, signal }),
    {
      enabled,
      onSuccess,
      onError,
      onSettled,
      retry: false,
      cacheTime: useCache ? CACHE_TIME : 0,
    }
  );
}
