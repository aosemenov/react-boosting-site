import React, { FC } from 'react'

import styled from '@mui/material/styles/styled'
import { Box, BoxProps, Typography, TypographyProps } from '@mui/material'
import { Section } from '@shared/ui/components/Section'
import { Container } from '@shared/ui/components/Container'

export const Wrapper = styled(Box)<BoxProps>(
  ({ theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: '40px 30px',
    background: theme.palette.customGray.mirage,
    borderRadius: '12px',
    [`@media (min-width: 768px)`]: {
      padding: '40px',
      justifyContent: 'space-between',
      flexDirection: 'row',
    }
  }),
)

const CustomTypography = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    maxWidth: '100%',
    color: 'white',
    marginBottom: '20px',
    [`@media (min-width: 768px)`]: {
      maxWidth: '60%',
      m: 0,
      mr: '20px',
    },
  }),
)

export const ImgWrapper = styled(Box)<BoxProps>(
  ({ theme }) => ({
    flexShrink: 0,
    width: '114px',
    height: '114px',
    [`@media (min-width: 768px)`]: {
      ml: 'auto',
    }
  }),
)

export const PromoSafety: FC<{}> = () => (
  <Wrapper>
    <CustomTypography variant={'body1'}>
      The BIGBOOST service provides our users with a unique protection system which is currently unparalleled worldwide.
      <br/>Our innovative system gives our users a 100% protection and guarantee.
    </CustomTypography>
    <ImgWrapper>
      <img width="100%" height="100%" style={{ objectFit: 'contain' }} src={'/media/images/safety.png'} alt={'safety'}/>
    </ImgWrapper>
  </Wrapper>
)
