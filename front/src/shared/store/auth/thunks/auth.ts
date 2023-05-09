import Cookies from 'universal-cookie'

import { paths } from '@app/paths/paths'
import { AppThunk } from '@shared/store'
import { actions } from '@shared/store/auth'
import { ICookiesToken } from '@shared/store/types'


export const auth = (token: string): AppThunk => async (dispatch) => {
  dispatch(actions.authStarted())
  // @ts-ignore
  const cookies = new Cookies()
  cookies.remove(ICookiesToken.key, { path: paths.root })
  cookies.set(ICookiesToken.key, token, { path: paths.root })

  dispatch(actions.authSuccess(token))
}