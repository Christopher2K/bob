import "@tanstack/react-query";
import {
  MutationCache,
  QueryClient,
  type QueryKey,
} from "@tanstack/react-query";

type MutationMeta = {
  invalidateKeys?: QueryKey[];
};

declare module "@tanstack/react-query" {
  interface Register {
    mutationMeta: MutationMeta;
  }
}

const mutationCache = new MutationCache({
  onSuccess: (_data, _variables, _result, _mutation, ctx) => {
    if (ctx.meta?.invalidateKeys) {
      ctx.meta.invalidateKeys.forEach((key) => {
        queryClient.invalidateQueries({
          queryKey: key,
        });
      });
    }
  },
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchInterval: false,
      retry: false,
    },
  },
  mutationCache,
});
