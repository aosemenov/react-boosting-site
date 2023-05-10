import React, { FC, useEffect, useLayoutEffect } from 'react'
import { paths } from '@app/paths/paths'
import { ICookiesToken } from '@shared/store/types'
import Cookies from 'universal-cookie'
import { Navigate } from 'react-router-dom'
import { usePushToPath } from '@shared/hooks/useToPage'

export const AuthGuard: FC<any> = ({ children }) => {
  const cookies = new Cookies()
  const goToAuth = usePushToPath(paths.clientArea.dashboard.auth)

  useEffect(() => {
    const tokenByCookies = cookies.get(ICookiesToken.key)

    if (!tokenByCookies) {
      goToAuth()
    }
  }, [])

  // If got here, it means that the redirect did not occur, and that tells us that the user is
  // authenticated / authorized.

  return children
}