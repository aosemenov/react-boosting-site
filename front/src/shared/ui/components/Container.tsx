import React, { FC } from 'react'

import styled from '@mui/material/styles/styled'

import { Box, BoxProps } from '@mui/material'

const Wrapper = styled(Box)<any>(
  () => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 60px',
  }),
)

export const Container: FC = ({ children }) => <Wrapper>{children}</Wrapper>
