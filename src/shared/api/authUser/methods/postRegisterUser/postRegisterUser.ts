import { AxiosRequestConfig } from 'axios'
import { IRequestData, IResponseData } from './index'
import { api, IResponse } from '@shared/api'

export const postRegisterUser = async (data: IRequestData): Promise<IResponse<IResponseData>> => {

  const requestConfig: AxiosRequestConfig = {
    method: 'POST',
    url: '/api/user/create',
    headers: {
      "Content-Type": "application/json"
    },
    data: {
      ...data
    }
  }

  const response = await api.request<IResponse<IResponseData>>(requestConfig)
  return response.data
}
