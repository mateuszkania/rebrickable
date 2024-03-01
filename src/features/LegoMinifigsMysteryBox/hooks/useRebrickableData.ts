import { useQuery, UseQueryResult } from "react-query";
import rebrickableApiClient from "@/services/rebrickable-api-client";
import { AxiosError } from "axios";

export const useRebrickableData = <T>(
  endpoint: string,
  enabled = false,
): UseQueryResult<T, AxiosError> => {
  return useQuery<T, AxiosError>(
    [endpoint],
    () => rebrickableApiClient.get<T>(endpoint).then((res) => res.data),
    {
      enabled,
    },
  );
};
