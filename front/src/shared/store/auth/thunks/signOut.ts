import Cookies from 'universal-cookie'

import { paths } from '@app/paths/paths'
import { AppThunk } from '@shared/store'
import { ICookiesToken } from '@shared/store/types'

export const signOut = (): AppThunk => async (dispatch) => {
  // @ts-ignore
  const cookies = new Cookies()
  cookies.remove(ICookiesToken.key, { path: paths.root })
}
