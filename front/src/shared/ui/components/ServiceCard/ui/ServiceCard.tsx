import React, { FC } from 'react'

import styled from '@mui/material/styles/styled'

import { Box, BoxProps, Typography } from '@mui/material'

const Wrapper = styled(Box)<any>(
  ({ theme, bgimage, disabled }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '320px',
    cursor: disabled ? 'default' : 'pointer',
    border: `4px solid ${theme.palette.primary.main}`,
    backgroundImage: `url(${bgimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.up('sm')]: {
      minHeight: '500px',
      transform: 'skew(-5deg)',
    },
    '&::before': {
      [theme.breakpoints.up('md')]: {
        position: 'absolute',
        zIndex: 1,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        content: "''",
        background: theme.palette.secondary.main,
        transition: '.4s all',
        opacity: .8,
      }
    },
    '&:hover': {
      filter: !disabled && 'drop-shadow(1px 0px 8px rgba(243, 48, 65, 0.6))',
      '&::before': {
        opacity: !disabled && '0.2'
      },
      '.services__title': {
        [theme.breakpoints.up('md')]: {
          transform: !disabled && 'skew(5deg) translateY(50px)',
        }
      },
    },
    '.services__title': {
      position: 'absolute',
      bottom: 0,
      zIndex: 0,
      fontFamily: 'Fugaz One, sans-serif',
      fontSize: '40px',
      fontWeight: '400',
      lineHeight: '44px',
      textTransform: 'uppercase',
      transition: '.3s transform',
      color: theme.palette.primary.main,
      [theme.breakpoints.up('sm')]: {
        transform: 'skew(5deg) translateY(0px)',
      },
    },
    '.services__icon': {
      position: 'relative',
      zIndex: 2,
      [theme.breakpoints.up('sm')]: {
        transform: 'skew(5deg)',
      },
    },
  }),
)

interface IServiceCardProps {
  iconComponent: JSX.Element
  bgimage: string
  title?: string
  disabled?: boolean
}

export const ServiceCard: FC<IServiceCardProps> = ({
 iconComponent,
 title,
 bgimage,
 disabled,
}) => {
  return (
    <Wrapper bgimage={bgimage} disabled={disabled}>
      <Box className={'services__icon'}>
        {iconComponent}
      </Box>
      {title &&
          <Typography className={'services__title'} variant={'h3'}>
            {disabled ? 'soon' : title}
          </Typography>
      }
    </Wrapper>
  )
}