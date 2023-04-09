import React from 'react'

import { Header } from '@widgets/header'
import { useDocumentTitle } from '@shared/hooks/useDocumentTitle'
import styled from '@mui/material/styles/styled'
import { Box, BoxProps } from '@mui/material'
import { Footer } from '@widgets/footer'
import { Banner } from '@widgets/banner'

export const LayoutWrapper = styled(Box)<BoxProps>(
  () => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100vh',
  }),
)

export const ContentWrapper = styled(Box)<BoxProps>(
  () => ({
    position: 'relative',
    flexGrow: 1,
    backgroundImage: 'url("/media/images/bg-sprite-1.svg")',
    backgroundRepeat: 'repeat',
    '&::before': {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      content: '""',
      background: 'black',
      opacity: '.4'
    }
  }),
)

export const Flex = styled(Box)<BoxProps>(
  () => ({
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
  }),
)

export const MainPage = () => {
  useDocumentTitle('Главная страница')

  return (
    <LayoutWrapper>
        <Header/>
        <ContentWrapper>
          <Flex>
            <Banner/>
          </Flex>
        </ContentWrapper>
        <Footer />
    </LayoutWrapper>
  )
}
