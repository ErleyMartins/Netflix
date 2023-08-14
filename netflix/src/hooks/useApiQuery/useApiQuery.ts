export function useApiQuery<TData = unknown, TError = unknown>({
  queryKey = undefined,
  controlKey = undefined,
  useCache = true,
  endpoint,
  queryString,
  loadingText,
  enabled,
  onSuccess,
  onError,
  onSettled,
}: RequestQueryProps<TData, TError>): UseQueryResult<
  Response<TData>,
  AxiosError<TError>
> {
  const toast = useToast();
  const setKey = storeQueryKey((state) => state.setKey);
  const setLoader = ApplicationStore((state) => state.setLoader);
  const clearLoader = ApplicationStore((state) => state.clearLoader);
  const key = buildQueryKey({ endpoint, queryKey, controlKey, queryString });

  if (controlKey) {
    setKey(controlKey, key);
  }

  return useQuery(
    key,
    async ({ signal }) => {
      if (loadingText) {
        setLoader(loadingText);
      }

      return axiosCall("GET", endpoint, { queryString, signal });
    },
    {
      enabled,
      onSuccess,
      onError(error) {
        handleOnRequestError<TError>({ error, onError, toast });
      },
      onSettled(response, error) {
        if (loadingText) {
          clearLoader();
        }
        if (onSettled) {
          onSettled(response, error);
        }
      },
      retry: false,
      cacheTime: useCache ? CACHE_TIME : 0,
    }
  );
}
