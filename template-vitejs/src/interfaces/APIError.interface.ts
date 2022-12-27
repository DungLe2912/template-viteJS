import { AxiosError } from 'axios'

export type TAPIError = AxiosError<{
  // eslint-disable-next-line camelcase
  correlation_id: string
  // eslint-disable-next-line camelcase
  pacetrace_id?: string
  error: {
    code: string
    message: string
  }
}>
