import { AppThunk } from '@shared/store'
import { IErrorCode } from '@shared/store/types'
import { IUserAuthorizationRequest } from '@shared/api/authUser/types'
import { actions } from '@shared/store/authUser'
import { postAuthUser } from '@shared/api/authUser/methods/postAuthUser'
import { auth } from '@shared/store/auth/thunks/auth'

export const fetchAuthUser = (payload: IUserAuthorizationRequest): AppThunk => async (dispatch) => {
  dispatch(actions.authStarted())
  try {
    const response = await postAuthUser(payload)
    if (!response) {
      dispatch(actions.authFailed({
        code: IErrorCode.RESPONSE,
        message: 'Некорректный ответ сервера',
      }))
      return
    }
    if (!response.success) {
      dispatch(actions.authFailed(response.error))
      return
    }
    dispatch(auth(response.payload.token))
    dispatch(actions.authSuccess(response.payload.user))
    return

  } catch (error) {
    dispatch(actions.authFailed({
      code: IErrorCode.REQUEST,
      message: 'Не удалось выполнить запрос',
    }))
  }
}