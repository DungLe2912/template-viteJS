import { AxiosError } from 'axios'
import httpStatus from 'http-status'
import { QueryClient } from 'react-query'

import { TAPIError } from 'interfaces'

const DEFAULT_MAX_QUERY_RETRY_COUNT = 3

const noQueryRetryResponseStatuses: Readonly<Record<string, boolean>> = {
  [httpStatus.FORBIDDEN]: true,
  [httpStatus.BAD_REQUEST]: true,
  [httpStatus.UNPROCESSABLE_ENTITY]: true,
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: (failureCount, error) => {
        return (
          failureCount <= DEFAULT_MAX_QUERY_RETRY_COUNT &&
          noQueryRetryResponseStatuses[
            (error as AxiosError<TAPIError>).response?.status ?? ''
          ] === undefined
        )
      },
    },
    mutations: {
      retry: (failureCount, error) => {
        return (
          failureCount <= DEFAULT_MAX_QUERY_RETRY_COUNT &&
          noQueryRetryResponseStatuses[
            (error as AxiosError<TAPIError>).response?.status ?? ''
          ] === undefined
        )
      },
    },
  },
})

export default queryClient
