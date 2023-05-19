import Cookies from 'universal-cookie'

import { paths } from '@app/paths/paths'
import { AppThunk } from '@shared/store'
import { ICookiesToken } from '@shared/store/types'
import { actions as authActions } from '@shared/store/auth'
import { actions as authFormActions } from '@shared/store/authUser'

export const signOut = (): AppThunk => (dispatch) => {
  const cookies = new Cookies()
  cookies.remove(ICookiesToken.key, { path: paths.root })

  dispatch(authActions.unauth())
  dispatch(authFormActions.resetAuth())
}
