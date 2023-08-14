import axios from "axios";
import qs from "qs";

import { Method, Params, QueryString, Response } from "./types";

const headers = {
  "Content-Type": "application/json",
};

function buildUrl(
  endpoint: string,
  queryStringObj: QueryString = undefined
): string {
  const url = `${import.meta.env.VITE_URL_API}/${endpoint}`;

  console.log({ url });
  if (queryStringObj) {
    return `${url}?${qs.stringify(queryStringObj)}`;
  }

  return url;
}

export async function axiosCall<TData>(
  method: Method,
  endpoint: string,
  { queryString, signal }: Params
): Promise<Response<TData>> {
  const url = buildUrl(endpoint, queryString);
  try {
    const response = await axios({
      method,
      headers,
      signal,
      url,
    });

    const { data, status } = response;

    return { data, status };
  } catch (error) {
    return Promise.reject(error);
  }
}
