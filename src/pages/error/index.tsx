import React from 'react'

import styled from '@mui/material/styles/styled'
import { Box, BoxProps, Portal } from '@mui/material'
import { Error404 } from '@widgets/error404'

export const Flex = styled(Box)<BoxProps>(
  () => ({
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
  }),
)

export const ErrorPage = () => {
  return (
      <Flex>
        <Error404 />
      </Flex>
  )
}
