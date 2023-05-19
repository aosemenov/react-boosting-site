import { AppThunk } from '@shared/store'
import { IErrorCode } from '@shared/store/types'
import { actions } from '@shared/store/authUser'
import { auth } from '@shared/store/auth/thunks/auth'
import { postRegisterUser } from '@shared/api/authUser/methods/postRegisterUser'
import { IUserRegisterRequest } from '@shared/api/authUser/types'

export const fetchRegisterUser = (payload: IUserRegisterRequest): AppThunk => async (dispatch) => {
  dispatch(actions.authStarted())
  try {
    const response = await postRegisterUser(payload)
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
    dispatch(actions.registerSuccess(response.payload.user))
    return

  } catch (error) {
    dispatch(actions.authFailed({
      code: IErrorCode.REQUEST,
      message: 'Не удалось выполнить запрос',
    }))
  }
}