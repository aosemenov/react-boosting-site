import React, { FC } from 'react'

import styled from '@mui/material/styles/styled'
import { Box, BoxProps, Button, Typography } from '@mui/material'

export const Wrapper = styled(Box)<BoxProps>(
  ({ theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: '80px 0',
    [theme.breakpoints.up('sm')]: {
      padding: '120px 0',
    }
  }),
)

export const WrapperTagline = styled(Box)<BoxProps>(
  ({ theme }) => ({
    textAlign: 'center',
    background: '-webkit-linear-gradient(bottom left, rgba(252,3,68,1) 30%, #F2E206 40%, rgba(252,3,68,1))',
    'WebkitBackgroundClip': 'text',
    'WebkitTextFillColor': 'transparent',
  }),
)

const CustomTitle = styled(Typography)<any>(
  ({ theme}) => ({
    fontFamily: 'Fugaz One, sans-serif',
    textTransform: 'uppercase',
    '&.custom': {
      '&-title': {
        fontSize: '70px',
        lineHeight: '77px',
        marginBottom: '20px',
      },
      '&-subtitle': {
        fontSize: '40px',
        lineHeight: '44px',
      }
    }
  }),
)

export const PromoTagline: FC = () => {
  return (
    <Wrapper>
      <WrapperTagline>
        <CustomTitle className={'custom-title'} variant={'h2'}>
          MAKE THE RIGHT CHOICE
        </CustomTitle>
        <CustomTitle className={'custom-subtitle'} variant={'h2'}>
          STAND WITH THE BEST
        </CustomTitle>
      </WrapperTagline>
      <Button
        variant="outlined"
        sx={{ mt: '30px' }}
      >
        <Typography>Buy boosting</Typography>
      </Button>
    </Wrapper>
  )
}