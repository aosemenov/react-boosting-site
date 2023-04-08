import React, { FC } from 'react'

import { Box, Typography } from '@mui/material'

import { MenuIcon } from '@widgets/menuDashboard/ui/MenuIcon'
import { MenuCustomLink } from '@widgets/menuDashboard/ui/MenuCustomLink'
import { TMenuItemProps } from '@widgets/menuDashboard/types/menuItemProps'

export const MenuItem: FC<TMenuItemProps> = ({ item }) => {
  return (
    <MenuCustomLink to={item.path}>
      <Box sx={{ display: 'flex', mr: '8px' }}>
        <MenuIcon objectType={item.title} />
      </Box>
      <Typography variant="menu1" color="white">
        {item.title}
      </Typography>
    </MenuCustomLink>
  )
}
