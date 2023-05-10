import { IUserRegisterRequest, IUserRegisterResponse } from '@shared/api/registerUser/types'

export type IRequestData = IUserRegisterRequest

export type IResponseData = IUserRegisterResponse

export { postRegisterUser } from './postRegisterUser';