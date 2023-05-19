import React, { FC } from 'react'

import styled from '@mui/material/styles/styled'
import { Box, BoxProps } from '@mui/material'
import { Banner } from '@widgets/banner'
import { Promo } from '@widgets/promo'
import { ClientAreaDashboard } from '@widgets/clientAreaDashboard'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthComponent } from '@widgets/auth'
import { ErrorPage } from '@pages/error'
import { RegisterComponent } from '@widgets/register'
import { useLocation } from 'react-router'
import { paths } from '@app/paths/paths'
import { RoutePage } from '@pages/routePage'
import { withAuthGuard } from '@shared/hocs/withAuthComp'
import { AuthRouteGuard } from '@shared/guards/AuthRouteGuard/ui/AuthRouteGuard'
import Cookies from 'universal-cookie'
import { ICookiesToken } from '@shared/store/types'

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

export const ClientAreaPage = withAuthGuard(() => {
  // Добавить логику роутинга, если пользователь не авторизован -> открывать страницу авторизации/регистрации,
  // сохранять рут в куки и после перекидывать пользователя после успешной авторизации

  return (
    <Flex>
      <Routes>
        <Route
          path={'client-area/*'}
          element={<AuthRouteGuard />}
        />
        <Route key={'notfound'} path={'*'} element={
          <RoutePage alias={'notfound'} title={'404 Not Found'}/>
        }/>
      </Routes>
    </Flex>
  )
})
