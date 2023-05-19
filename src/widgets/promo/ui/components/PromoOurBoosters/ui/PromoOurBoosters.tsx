import React, { FC } from 'react'

import styled from '@mui/material/styles/styled'
import { Box, BoxProps, Typography, TypographyProps } from '@mui/material'
import { Section } from '@shared/ui/components/Section'
import { Container } from '@shared/ui/components/Container'

const Wrapper = styled(Box)<BoxProps>(
  ({ theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: '20px 30px 30px',
    background: theme.palette.customGray.mirage,
    borderRadius: '12px',
    [`@media (min-width: 1024px)`]: {
      flexDirection: 'row',
      padding: '40px',
    }
  }),
)
const CustomColumn = styled(Box)<BoxProps>(
  ({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    [`@media (min-width: 768px)`]: {
      flexDirection: 'row',
    },
    [`@media (min-width: 1024px)`]: {
      width: '50%',
    },
    '&:first-of-type': {
      marginBottom: '40px',
      [`@media (min-width: 1024px)`]: {
        marginRight: '30px',
        marginBottom: '0'
      }
    }
  }),
)
const CountRow = styled(Box)<BoxProps>(
  ({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    '&:first-of-type': {
      marginBottom: '40px',
      [`@media (min-width: 768px)`]: {
        margin: '0',
        paddingRight: '20px',
      }
    }
  }),
)

const CustomTitle = styled(Typography)<any>(
  ({ theme, gradient }) => ({
    fontFamily: 'Fugaz One, sans-serif',
    fontSize: '30px',
    lineHeight: '38px',
    marginBottom: '20px',
    textTransform: 'uppercase',
    background: gradient ? '-webkit-linear-gradient(bottom, rgba(252,3,68,1), #F2E206)' : '-webkit-linear-gradient(bottom left, rgba(252,3,68,1), #F2E206)',
    'WebkitBackgroundClip': 'text',
    'WebkitTextFillColor': 'transparent',
    [`@media (min-width: 1024px)`]: {
      minHeight: '78px',
    }
  }),
)

const CustomTitleCount = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    fontFamily: 'Fugaz One, sans-serif',
    fontSize: '60px',
    lineHeight: '78px',
    marginBottom: '10px',
    color: theme.palette.primary.main,
  }),
)

export const PromoOurBoosters: FC<{}> = () => (
  <Wrapper>
    <CustomColumn sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant={'body1'} color={'white'}>
        A team of highly qualified boosters, with huge experience and personal achievements on the PRO SCENE.
        They will help you achieve the desired rank in the shortest possible time.
      </Typography>
    </CustomColumn>
    <CustomColumn sx={{ display: 'flex'}}>
      <CountRow>
        <CustomTitleCount>15K<span style={{ color: 'white' }}>+</span></CustomTitleCount>
        <CustomTitle>
          completed order
        </CustomTitle>
        <Typography variant={'body2'} color={'white'}>
          We have spent over one million hours in boosting accounts for our customers and players as well
        </Typography>
      </CountRow>
      <CountRow>
        <CustomTitleCount>100<span style={{ color: 'white' }}>+</span></CustomTitleCount>
        <CustomTitle gradient='true'>
          Boosters
        </CustomTitle>
        <Typography variant={'body2'} color={'white'}>
          We have a total 100 boosters in your roster to provide you the best only nothing else
        </Typography>
      </CountRow>
    </CustomColumn>
  </Wrapper>
)
