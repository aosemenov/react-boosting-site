import React, { FC } from 'react'

import styled from '@mui/material/styles/styled'

import { Box, BoxProps } from '@mui/material'

export const Wrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}))

export const BodyComponent: FC = ({ children }) => <Wrapper>{children}</Wrapper>
