import { QueryKey } from "@tanstack/react-query";
import objectHash from "object-hash";

export function buildQueryKey({
  queryKey,
  endpoint,
  queryString,
}: {
  queryKey?: QueryKey;
  endpoint: string;
  queryString?: unknown;
}): QueryKey {
  return [...(queryKey ?? [objectHash({ endpoint, queryString })])];
}
