import React, { FC } from 'react'

import styled from '@mui/material/styles/styled'
import { Box, BoxProps, Typography } from '@mui/material'

export const Wrapper = styled(Box)<BoxProps>(
  ({ theme }) => ({
    position: 'relative',
    width: '100%',
    padding: '24px 28px 48px',
  }),
)

export const BannerComponent: FC<{}> = () => (
  <Wrapper>
    <Box>
      <Typography>
        your new way
        to the top
      </Typography>
    </Box>
    <Box
      position="absolute"
      top="0"
      right="0"
      height="850px"
    >
      <video style={{ width: '100%', height: '100%', opacity: '.15', display: 'none' }} muted autoPlay loop> // TODO:
        now display: none
        <source type="video/mp4" src="../pages/main/layout/media/voy_f.mp4"/>
      </video>
    </Box>
  </Wrapper>
)
