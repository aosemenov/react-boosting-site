import React, { Children, FC } from 'react'

import styled from '@mui/material/styles/styled'
import { Box, BoxProps, Typography } from '@mui/material'

import { TInfoBlockItemProps } from '@shared/ui/types/infoBlockProps'

const Wrapper = styled(Box)<BoxProps>(({ theme }) => ({
  marginBottom: '32px',
  '&:last-child': {
    margin: '0',
  },
}))

const WrapperItem = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'baseline',
  flexWrap: 'nowrap',
  marginBottom: '14px',
  '&:last-child': {
    marginBottom: '0',
  },
}))

export const InfoBlock: FC<TInfoBlockItemProps> = ({ title, children }) => {
  return (
    <Wrapper>
      {title && (
        <Box sx={{ mb: '16px' }}>
          <Typography
            variant="h3"
            sx={{ textTransform: 'uppercase', color: 'text.primary' }}
          >
            {title}
          </Typography>
        </Box>
      )}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {Children.map(children, child => {
          return <WrapperItem>{child}</WrapperItem>
        })}
      </Box>
    </Wrapper>
  )
}
