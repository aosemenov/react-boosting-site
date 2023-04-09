import React, { FC } from 'react'

import styled from '@mui/material/styles/styled'
import { Box, BoxProps, Link, Typography } from '@mui/material'

import { NavLink } from 'react-router-dom'
import { IInfoBlock } from '@widgets/footer/types/types'

const Wrapper = styled(Box)<BoxProps>(({ theme }) => ({}))

const WrapperItem = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'baseline',
  flexWrap: 'nowrap',
  marginBottom: '12px',
  '&:last-child': {
    marginBottom: '0',
  },
}))

export const InfoBlock: FC<IInfoBlock> = ({
  title,
  paths,
}) => {
  return (
    <Wrapper>
      <Box sx={{ mb: '24px' }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: '18px',
            textTransform: 'uppercase',
            color: 'text.primary',
            fontWeight: 700,
            wordBreak: 'break-word',
          }}
        >
          {title}
        </Typography>
      </Box>
      {paths && paths.map((path) => {
        return (
          <WrapperItem sx={{ mb: '10px' }}>
            <Link to={path.link} component={NavLink}>
              <Typography variant="body1">{path.name}</Typography>
            </Link>
          </WrapperItem>
        )
      })}
    </Wrapper>
  )
}
