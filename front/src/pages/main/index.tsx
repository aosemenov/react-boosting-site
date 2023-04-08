import React from 'react'

import { Header } from '@widgets/header'
import { useDocumentTitle } from '@shared/hooks/useDocumentTitle'
import styled from '@mui/material/styles/styled'
import { Box } from '@mui/material'
import { Banner } from '@widgets/banner/ui/Wrapper'

export const Layout = styled(Box)<any>(
  ({ backgroundColor }) => ({
    width: '100%',
    height: '2000px',
    backgroundColor: backgroundColor ?? 'white',
  }),
)

export const MainPage = () => {
  useDocumentTitle('Главная страница')

  return (
    <Layout backgroundColor={'black'}>
        <Header/>
        <Banner/>
    </Layout>
  )
}
