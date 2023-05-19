import { IUser } from '@shared/store/types'

export type IUserAuthorization = {
  email: string,
  password: string,
}

export type IAuthorizationUserResponse = {
  token: string,
  user: IUser,
}

export type IRegisterUserResponse = {
  token: string,
  user: IUser,
}

export type IUserRegister = {
  email?: string,
  password: string,
  nickname: string,
  name?: string,
  first_name?: string,
  last_name?: string,
  telegram_link?: string,
  vk_link?: string,
}

export type IUserRegisterRequest = IUserRegister
export type IUserAuthorizationRequest = IUserAuthorization