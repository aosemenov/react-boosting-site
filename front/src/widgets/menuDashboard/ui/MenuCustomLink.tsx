import React, { FC } from 'react'
import { NavLink, useMatch } from 'react-router-dom'

import { styled } from '@mui/system'
import { Box, Link } from '@mui/material'

import { TMenuCustomLink } from '@widgets/menuDashboard/types/menuCustomLink'
import { IMenuButtonProps } from '@widgets/menuDashboard/types/menuButtonProps'

const MenuButton = styled(Box)<IMenuButtonProps>(({ active, theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '40px',
  padding: '0 10px',
  backgroundColor: active ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
  borderRadius: '6px',
}))

export const MenuCustomLink: FC<TMenuCustomLink> = ({
  children,
  to,
  ...props
}) => {
  const match = useMatch(to)

  return (
    <Link to={to} component={NavLink} {...props}>
      <MenuButton active={match} sx={{ display: 'flex' }}>
        {children}
      </MenuButton>
    </Link>
  )
}
