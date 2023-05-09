import { IError } from '@shared/store/types'

export type IUserAuthorization = {
  email: string,
  password: string,
}

export type IAuthorizationUserResponse = {
  token: string,
  user: {
    id: number,
    email: string,
    nickname: string,
    name: string,
    first_name: string | null,
    last_name: string | null,
  },
}

export type IUserAuthorizationRequest = IUserAuthorization

export type IUserAuthorizationResponse = {
  success: boolean,
  error?: IError,
}