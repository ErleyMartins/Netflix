import { ReactElement } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Props } from "./types";

export function Providers({ children }: Props): ReactElement {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
