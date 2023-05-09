import { IError, IErrorCode } from '@shared/store/types'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const requestConfig: AxiosRequestConfig = {
  timeout: 10000,
  validateStatus: (status) => true,
  baseURL: process.env.API_BASE_URL,
  headers: {
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*',
  },
}

export const api = axios.create(requestConfig)

if (process.env.NODE_ENV !== 'production') {
  api.interceptors.request.use(
    // @ts-ignore
    (request: AxiosRequestConfig): AxiosRequestConfig => {
      return request;
    },

    (error: any): IErrorResponse => {
      throw {
        code: IErrorCode.REQUEST,
        message: error.message,
      }
    },
  )

  api.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
      if (response.status === 403) {
        return {
          ...response,
          data: {
            success: false,
            error: {
              code: IErrorCode.NO_ACCESS,
            }
          }
        }
      }
      if (response.status !== 200) {
        console.log(response)
        return {
          ...response,
          data: {
            success: false,
            error: {
              message: response.data.message,
              code: IErrorCode.RESPONSE,
            }
          }
        }
      }
      return {
        ...response,
        data: {
          payload: response.data,
          success: true,
        }
      }
    },

    (error: any): IErrorResponse => {
      console.warn('[api response error]', error)
      throw {
        code: IErrorCode.RESPONSE,
        message: error.message,
      }
    },
  )
}

export type ISuccessResponse<T> = {
  success: true,
  payload: T,
}

export type IErrorResponse = {
  success: false,
  error: IError,
}

export type IResponse<T> = ISuccessResponse<T> | IErrorResponse