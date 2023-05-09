import { useCallback } from 'react'
import { useAppSelector } from '@shared/hooks/store'
import { ICookiesToken } from '@shared/store/types'
import Cookies from 'universal-cookie'

export function useAuth() {
  const cookies = new Cookies()
  const { isAuthorized, accessToken } = useAppSelector(state => state.auth)
  const tokenByCookies = cookies.get(ICookiesToken.key)

  const isAuth = !!tokenByCookies

  return {
    isAuth,
  }
}
