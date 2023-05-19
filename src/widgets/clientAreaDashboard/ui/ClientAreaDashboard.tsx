import React, { FC } from 'react'

import styled from '@mui/material/styles/styled'

import { Box, BoxProps } from '@mui/material'
import { paths } from '@app/paths/paths'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DashboardLayout } from '@widgets/dashboard'
import { RegisterComponent } from '@widgets/register'
import { AuthComponent } from '@widgets/auth'
import { RoutePage } from '@pages/routePage'
import { OrdersList } from '@widgets/ordersList'
import { withAuthGuard } from '@shared/hocs/withAuthComp'

const Wrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}))

export const ClientAreaDashboard: FC<{}> = () => {
  // Логика формы авторизации страницы...

  return (
    <Wrapper>
      <DashboardLayout>
        <Routes>
          <Route key={'overview'} path={paths.clientArea.root} element={<OrdersList />} />
          <Route key={'orders'} path={paths.clientArea.orders} element={<OrdersList />} />
          <Route key={'settings'} path={paths.clientArea.settings} element={null} />
          <Route key={'other'} path={'*'} element={<Navigate to={paths.clientArea.dashboard.overview} />} />
        </Routes>
      </DashboardLayout>
    </Wrapper>
  )
}
