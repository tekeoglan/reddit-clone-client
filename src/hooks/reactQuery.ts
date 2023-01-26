import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from "react-query";
import { QueryFunctionContext } from "react-query/types/core/types";

import axios, { AxiosError, AxiosResponse } from "axios";
import { InfinitePagesInterface } from "../interfaces";

type QueryKeyType = [string, object | undefined];

export const fetcher = async <T>({
  queryKey,
  pageParam,
}: QueryFunctionContext<QueryKeyType>): Promise<T> => {
  const [url, params] = queryKey;
  return axios
    .get<T>(url, { params: { ...params, cursor: pageParam } })
    .then((res) => res.data);
};

export const useLoadMore = <T>(url: string | null, params?: object) => {
  const context = useInfiniteQuery<
    InfinitePagesInterface<T>,
    Error,
    InfinitePagesInterface<T>,
    QueryKeyType
  >(
    [url!, params],
    ({ queryKey, pageParam = 0, meta }) =>
      fetcher({ queryKey, pageParam, meta }),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.next_cursor ?? undefined;
      },
    }
  );
  return context;
};

export const usePrefetch = <T>(url: string | null, params?: object) => {
  const queryClient = useQueryClient();

  return () => {
    if (!url) {
      return;
    }

    queryClient.prefetchQuery<T, Error, T, QueryKeyType>(
      [url!, params],
      ({ queryKey, meta }) => fetcher({ queryKey, meta })
    );
  };
};

export const useFetch = <T>(
  url: string | null,
  params?: object,
  config?: UseQueryOptions<T, Error, T, QueryKeyType>
) => {
  const context = useQuery<T, Error, T, QueryKeyType>(
    [url!, params],
    ({ queryKey, meta }) => fetcher({ queryKey, meta }),
    { enabled: !!url, ...config }
  );

  return context;
};

export const useGenericMutation = <T, S>(
  func: (data: T | S) => Promise<AxiosResponse<S>>,
  url: string,
  params?: object,
  updater?: ((oldData: T, newData: S) => T) | undefined
) => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, AxiosError, T | S>(func, {
    onMutate: async (data) => {
      await queryClient.cancelQueries([url!, params]);

      const previousData = queryClient.getQueryData([url!, params]);

      queryClient.setQueryData<T>([url!, params], (oldData) => {
        return updater ? updater(oldData!, data as S) : (data as T);
      });

      return previousData;
    },
    onError: (err, _, context) => {
      queryClient.setQueryData([url!, params], context);
    },
    onSettled: () => {
      queryClient.invalidateQueries([url!, params]);
    },
  });
};

export const useDelete = <T>(
  url: string,
  params?: object,
  updater?: (oldData: T, id: string | number) => T
) => {
  return useGenericMutation<T, string | number>(
    () => axios.delete(url, { withCredentials: true }),
    url,
    params,
    updater
  );
};

export const useCreate = <T, S>(
  url: string,
  params?: object,
  updater?: (oldData: T, newData: S) => T
) => {
  return useGenericMutation<T, S>(
    (data) => axios.post<S>(url, data, { withCredentials: true }),
    url,
    params,
    updater
  );
};

export const useUpdate = <T, S>(
  url: string,
  params?: object,
  updater?: (oldData: T, newData: S) => T
) => {
  return useGenericMutation<T, S>(
    (data) => axios.patch(url, data, { withCredentials: true }),
    url,
    params,
    updater
  );
};
