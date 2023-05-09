import React from 'react'

import styled from '@mui/material/styles/styled'
import { Box, BoxProps } from '@mui/material'
import { Banner } from '@widgets/banner'
import { Promo } from '@widgets/promo'
import { ClientAreaDashboard } from '@widgets/clientAreaDashboard'
import { Route, Routes } from 'react-router-dom'
import { AuthComponent } from '@widgets/auth'
import { ErrorPage } from '@pages/error'
import { RegisterComponent } from '@widgets/register'
import { useLocation } from 'react-router'
import { paths } from '@app/paths/paths'
import { RoutePage } from '@pages/routePage'

export const Flex = styled(Box)<BoxProps>(
  () => ({
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100vh',
  }),
)

export const ClientAreaPage = () => {
  // Добавить логику роутинга, если пользователь не авторизован -> открывать страницу авторизации/регистрации,
  // сохранять рут в куки и после перекидывать пользователя после успешной авторизации

  return (
      <Flex>
        <Routes>
          <Route key={'register'} path={paths.clientArea.dashboard.register} element={<RegisterComponent />} />
          <Route key={'auth'} path={paths.clientArea.dashboard.auth} element={<AuthComponent />} />
          <Route key={'dashboard'} path={'client-area/*'} element={<ClientAreaDashboard />} />
          <Route key={'notfound'} path={'*'} element={
            <RoutePage alias={'notfound'} title={'404 Not Found'}/>
          }/>
        </Routes>
      </Flex>
  )
}
