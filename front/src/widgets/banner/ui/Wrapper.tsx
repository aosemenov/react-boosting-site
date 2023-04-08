import React, { FC } from 'react'

import styled from '@mui/material/styles/styled'
import { Box, Typography } from '@mui/material'

import { IWrapperProps } from '@widgets/header/types/wrapperProps'
import { THeaderProps } from '@widgets/header/types/headerProps'

export const Wrapper = styled(Box)<any>(
  ({ height, padding, theme }) => ({
    position: 'relative',
    width: '100%',
    height: '900px',
    padding: padding ?? '24px 28px 48px',
  }),
)

export const Banner: FC<THeaderProps> = ({
  padding,
  height,
}) => (
  <Wrapper padding={padding}>
    <Box>
      <Typography>
        your new way
        to the top
      </Typography>
    </Box>
    <Box
      position='absolute'
      top='0'
      right='0'
      height='850px'
    >
      <video style={{ width: '100%', height: '100%', opacity:'.15'}} muted autoPlay loop>
        <source type="video/mp4" src="../pages/main/layout/media/voy_f.mp4"/>
      </video>
    </Box>
  </Wrapper>
)
