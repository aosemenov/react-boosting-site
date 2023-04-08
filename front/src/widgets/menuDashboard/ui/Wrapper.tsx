import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { Box, Link } from '@mui/material'

import { MegafonIcon } from '@shared/ui/icons/MegafonIcon'

import {
  menuGroups,
  menuItems,
} from '@widgets/menuDashboard/model/MenuDashboardModel'

import { TMenuDashboardProps } from '@widgets/menuDashboard/types/menuDashboardProps'

import { MenuItemGroup } from '@widgets/menuDashboard/ui/MenuItemGroup'
import { MenuItem } from '@widgets/menuDashboard/ui/MenuItem'

import { mainTheme } from '@app/styles/mainTheme'

export const MenuDashboard: FC<TMenuDashboardProps> = ({ paths }) => (
  <>
    <Box sx={{ display: 'flex', padding: '24px 18px' }}>
      <Link to={paths.root} component={NavLink}>
        <MegafonIcon svgColor={mainTheme.palette.common.white} />
      </Link>
    </Box>
    <Box sx={{ padding: '0 8px' }}>
      {menuItems.map(item => (
        <MenuItem key={item.title} item={item} />
      ))}
      {menuGroups.map(item => (
        <MenuItemGroup
          key={item.name}
          name={item.name}
          groupItem={item.groupItem}
        />
      ))}
    </Box>
  </>
)
