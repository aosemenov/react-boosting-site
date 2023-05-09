import { AxiosRequestConfig } from 'axios'
import { IRequestData, IResponseData } from './index'
import { api, IResponse } from '@shared/api'

export const postAuthUser = async ({
  email,
  password,
}: IRequestData): Promise<IResponse<IResponseData>> => {

  const requestConfig: AxiosRequestConfig = {
    method: 'POST',
    url: '/api/user/login',
    headers: {
      "Content-Type": "application/json"
    },
    data: {
      email,
      password,
    }
  }

  const response = await api.request<IResponse<IResponseData>>(requestConfig)
  return response.data
}
