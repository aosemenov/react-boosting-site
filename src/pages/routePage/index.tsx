import React, { useCallback, useEffect } from 'react'
import { useLocation } from 'react-router'
import { MainPage } from '@pages/main'
import { Layout } from '@widgets/layout'
import { ErrorPage } from '@pages/error'
import { ErrorLayout } from '@widgets/errorLayout'
import { ClientAreaPage } from '@pages/clientArea'
import { ClientAreaLayout } from '@widgets/clientAreaLayout'

export const RoutePage = ({ alias, title }: { alias: string, title: string }) => {
  const location = useLocation()
  const isClientAreaPage = alias === 'profile'
  const isErrorPage = alias === 'notfound'

  useEffect(() => {
    window.scroll({ top: 0 })
  }, [location])

  const MainBlock = useCallback(() =>
    <>
      {alias === 'root' && <MainPage/>}
      {alias === 'profile' && <ClientAreaPage/>}
      {alias === 'notfound' && <ErrorPage/>}
    </>, [alias])

  if (isClientAreaPage) {
    return (
      <ClientAreaLayout
        title={title}
        alias={alias}
        MainBlock={MainBlock}
      />
    )
  }

  if (isErrorPage) {
    return (
      <ErrorLayout
        title={title}
        alias={alias}
        MainBlock={MainBlock}
      />
    )
  }

  return (
    <Layout
      title={title}
      alias={alias}
      MainBlock={MainBlock}
    />
  )
}
