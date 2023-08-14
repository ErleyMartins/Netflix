import { UseInfiniteQueryResult } from "@tanstack/react-query";
import { ResponseInfinite } from "../types";

export function flatInfiniteResult<T>(
  response: UseInfiniteQueryResult<ResponseInfinite<T>>
): Array<T> {
  return (response.data?.pages ?? [])
    .map((page) => page.data)
    .reduce((acc, curr) => [...acc, ...curr], []);
}
