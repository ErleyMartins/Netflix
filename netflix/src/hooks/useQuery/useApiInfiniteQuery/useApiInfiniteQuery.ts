import {
  UseInfiniteQueryResult,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

import { CACHE_TIME } from "utils/constants";

import { RequestInfiniteQueryProps } from "./types";
import { buildQueryKey } from "../helpers";
import { axiosCall } from "../fetch";
import { ResponseInfinite } from "../types";

export function useApiInfiniteQuery<TData = unknown, TError = unknown>({
  queryKey = undefined,
  useCache = true,
  endpoint,
  queryString,
  enabled,
  onSuccess,
  onError,
  onSettled,
}: RequestInfiniteQueryProps<TData, TError>): UseInfiniteQueryResult<
  ResponseInfinite<TData>,
  AxiosError<TError>
> {
  const key = buildQueryKey({ queryKey, endpoint, queryString });

  return useInfiniteQuery(
    key,
    async ({ signal, pageParam = 1 }) =>
      axiosCall("GET", endpoint, {
        queryString: {
          ...(queryString as Record<string, unknown>),
          pageNumber: pageParam,
        },
        signal,
      }),
    {
      enabled,
      onSuccess,
      onError,
      onSettled,
      retry: false,
      cacheTime: useCache ? CACHE_TIME : 0,
      getNextPageParam: ({ data }: { data: Array<TData> }): number =>
        data.length + 1,
    }
  );
}
