import React, { FC } from 'react'

import styled from '@mui/material/styles/styled'

import { Box, BoxProps, Typography } from '@mui/material'

const Wrapper = styled(Box)<any>(
  ({ theme }) => ({
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      maxWidth: '370px',
      minHeight: '144px',
      padding: '30px',
      background: theme.palette.customGray.mirage2,
      borderRadius: '12px',
      [theme.breakpoints.up('sm')]: {

      },
      '.com-card': {
        '&__header': {
          display: 'flex',
          alignItems: 'center',
          marginBottom: '20px',
          '&-title': {
            color: theme.palette.common.white,
          },
          '&-icon': {
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
            width: '27px',
            height: '27px',
            marginRight: '20px',
          },
        },
        '&__body': {
          '&-text': {
            color: theme.palette.common.white,
          }
        }
      },
    }
))

interface IServiceCardProps {
  iconComponent: JSX.Element
  title?: string
  description?: string
}

export const CommunicationCard: FC<IServiceCardProps> = ({
 iconComponent,
 title,
 description,
}) => {
  return (
    <Wrapper className={'com-card'}>
      <Box className={'com-card__header'}>
        <Box className={'com-card__header-icon'}>
          {iconComponent}
        </Box>
        <Typography  className={'com-card__header-title'} variant={'body1'}>
          {title}
        </Typography>
      </Box>
      <Box className={'com-card__body'}>
        <Typography  className={'com-card__body-text'} variant={'body2'}>
          {description}
        </Typography>
      </Box>
    </Wrapper>
  )
}