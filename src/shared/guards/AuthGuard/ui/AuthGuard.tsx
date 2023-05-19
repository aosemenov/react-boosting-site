import React, { FC, useEffect, useLayoutEffect } from 'react'
import { paths } from '@app/paths/paths'
import { ICookiesToken } from '@shared/store/types'
import Cookies from 'universal-cookie'
import { usePushToPath } from '@shared/hooks/useToPage'
import { useLocation } from 'react-router'
import { Route, Routes } from 'react-router-dom'
import { RegisterComponent } from '@widgets/register'
import { AuthComponent } from '@widgets/auth'
import { Box, BoxProps } from '@mui/material'
import styled from '@mui/material/styles/styled'
import { useAppSelector } from '@shared/hooks/store'

const Flex = styled(Box)<BoxProps>(
  () => ({
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100vh',
  }),
)

export const AuthGuard: FC<any> = ({ children }) => {
  const { isAuthorized } = useAppSelector(state => state.auth)
  const location = useLocation()
  const isAuthRoute = location.pathname === paths.clientArea.dashboard.auth || location.pathname === paths.clientArea.dashboard.register
  // если пользователь не авторизован убираем из роутов /client-area
  if (!isAuthorized && isAuthRoute) {
    return (
      <Flex>
        <Routes>
          <Route key={'register'} path={paths.clientArea.dashboard.register} element={<RegisterComponent/>}/>
          <Route key={'auth'} path={paths.clientArea.dashboard.auth} element={<AuthComponent/>}/>
        </Routes>
      </Flex>
    )
  }

  return children
}