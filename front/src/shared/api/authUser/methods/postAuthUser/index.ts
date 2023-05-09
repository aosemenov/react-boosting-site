import { IAuthorizationUserResponse, IUserAuthorizationRequest } from '@shared/api/authUser/types'

export type IRequestData = IUserAuthorizationRequest

export type IResponseData = IAuthorizationUserResponse

export { postAuthUser } from './postAuthUser';