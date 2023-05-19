import { IRegisterUserResponse, IUserRegisterRequest } from '@shared/api/authUser/types'

export type IRequestData = IUserRegisterRequest

export type IResponseData = IRegisterUserResponse

export { postRegisterUser } from './postRegisterUser';