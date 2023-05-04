import React, { FC } from 'react'

import styled from '@mui/material/styles/styled'

import { Box, BoxProps } from '@mui/material'

const Wrapper = styled(Box)<any>(
  ({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '688px',
    margin: '0 auto',
    padding: '0 20px',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '1280px',
      padding: '0 60px',
    }
  }),
)

export const Container: FC = ({ children }) => <Wrapper>{children}</Wrapper>
