import React from 'react'

import styled from '@mui/material/styles/styled'
import { Box, BoxProps } from '@mui/material'
import { Banner } from '@widgets/banner'
import { Promo } from '@widgets/promo'
import { AuthComponent } from '@widgets/auth'
import { AuthLayoutComponent } from '@widgets/layout/ui/AuthLayoutComponent'

export const Flex = styled(Box)<BoxProps>(
  () => ({
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
  }),
)

export const AuthPage = () => {
  // Логика роутинга...

  return (
      <Flex>
        <AuthLayoutComponent />
      </Flex>
  )
}
