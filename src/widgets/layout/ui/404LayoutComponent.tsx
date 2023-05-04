import React from 'react'

import { useDocumentTitle } from '@shared/hooks/useDocumentTitle'
import { Box, BoxProps } from '@mui/material'

import styled from '@mui/material/styles/styled'

import { Block404 } from '@shared/ui/components/404Block/ui/Block404'

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

export const Layout404Component = ({ title }: ILayout): JSX.Element => {
  useDocumentTitle(title)

  return (
    <LayoutWrapper>
        <Block404 />
    </LayoutWrapper>
  )
}
