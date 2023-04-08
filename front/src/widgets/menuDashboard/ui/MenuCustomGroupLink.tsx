import React, { FC } from 'react'
import { NavLink, useMatch } from 'react-router-dom'

import { styled } from '@mui/system'
import { Box, Link } from '@mui/material'

import { TMenuCustomLink } from '@widgets/menuDashboard/types/menuCustomLink'
import { IMenuButtonProps } from '@widgets/menuDashboard/types/menuButtonProps'

const MenuButton = styled(Box)<IMenuButtonProps>(({ active, theme }) => ({
  display: 'inline-flex !important',
  alignItems: 'center',
  height: '23px',
  padding: '0 8px',
  backgroundColor: active ? 'rgba(255, 255, 255, 0.25)' : 'transparent',
  borderRadius: '20px',
}))

export const MenuCustomGroupLink: FC<TMenuCustomLink> = ({
  children,
  to,
  ...props
}) => {
  const match = useMatch(to)

  return (
    <Link
      to={to}
      component={NavLink}
      sx={{
        textDecoration: 'none',
        display: 'inline-block',
        marginBottom: '4px',
      }}
      {...props}
    >
      <MenuButton active={match} sx={{ display: 'flex' }}>
        {children}
      </MenuButton>
    </Link>
  )
}
