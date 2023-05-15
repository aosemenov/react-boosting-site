import React, { FC } from 'react'
import { paths } from '@app/paths/paths'
import { Navigate } from 'react-router-dom'
import { ClientAreaDashboard } from '@widgets/clientAreaDashboard'
import { useAppSelector } from '@shared/hooks/store'

export const AuthRouteGuard: FC<any> = ({ ...rest }) => {
  const { isAuthorized } = useAppSelector(state => state.auth)
  
  return (
    isAuthorized ? (
      <ClientAreaDashboard />
    ) : (
      <Navigate to={paths.clientArea.dashboard.auth}/>
    )
  )
}