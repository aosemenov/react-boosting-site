import React from 'react'

import { useDocumentTitle } from '@shared/hooks/useDocumentTitle'
import useResponsive from '@shared/hooks/useResponsive'
import { Box, BoxProps, Menu } from '@mui/material'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import styled from '@mui/material/styles/styled'

interface ILayout {
  MainBlock: () => JSX.Element
  alias: string,
  title: string,
}

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
  ({ theme }) => ({
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
      background: theme.palette.common.black,
      opacity: '.6',
    },
  }),
)

export const LayoutComponent = ({ MainBlock, alias, title }: ILayout): JSX.Element => {
  useDocumentTitle(title)

  return (
    <LayoutWrapper>
      <Header/>
      <ContentWrapper>
        <MainBlock/>
      </ContentWrapper>
      <Footer/>
    </LayoutWrapper>
  )
}
