import React, { FC } from 'react'

import styled from '@mui/material/styles/styled'
import { Avatar, AvatarProps, Box, BoxProps, Rating, Typography } from '@mui/material'

import { IFeedbackCard } from '@widgets/feedbackCard/types/types'
import { mainTheme } from '@app/styles/mainTheme'

const Wrapper = styled(Box)<BoxProps>(
  ({ theme }) => ({
    display: 'flex',
    height: '100%',
    minHeight: '140px',
    padding: '0',
    [`@media (min-width: 768px)`]: {
      padding: '0 30px',
    },
  }),
)

const CustomAvatar = styled(Avatar)<AvatarProps>(
  ({ theme }) => ({
    width: 60,
    height: 60,
    [`@media (min-width: 768px)`]: {
        width: 77,
        height: 77
    },
  }),
)

export const FeedbackCard: FC<IFeedbackCard> = ({
  avatarSrc,
  name,
  description,
  starCount,
}) => (
  <Wrapper>
    <Box sx={{ mr: '22px' }}>
      <CustomAvatar
        src={avatarSrc}
        alt={`avatar-${name}`}
      />
    </Box>
    <Box sx={{ flexDirection: 'column', display: 'flex' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant={'body1'} sx={{ mb: '12px', fontWeight: 600 }} color={mainTheme.palette.primary.main}>
          {name}
        </Typography>
        <Typography variant={'body1'} color={mainTheme.palette.common.white}>
          {description}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: '24px', flexShrink: 0 }}>
        <Rating
          name="read-only"
          value={starCount}
          readOnly/>
      </Box>
    </Box>
  </Wrapper>
)
