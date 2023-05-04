import React, { useCallback, useEffect } from 'react'
import { useLocation } from 'react-router'
import { MainPage } from '@pages/main'
import { Layout } from '@widgets/layout'
import { AuthPage } from '@pages/auth'

export const RoutePage = ({ alias, title }: { alias: string, title: string }) => {
  const location = useLocation()

  useEffect(() => {
    window.scroll({ top: 0 })
  }, [location])

  const MainBlock = useCallback(() =>
    <>
      {alias === 'root' && <MainPage />}
      {alias === 'client-area/auth' && <AuthPage />}
    </>, [alias])

  return (
    <Layout
      title={title}
      alias={alias}
      MainBlock={MainBlock}
    />
  )
}
