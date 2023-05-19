import PropTypes from 'prop-types'
import {
  Box,
  Divider,
  Drawer,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import React, { FC } from 'react'
import { BigBoostIcon } from '@shared/ui/icons/BigBoostIcon'
import { NavLink } from 'react-router-dom'
import { SideNavItem } from '@widgets/dashboard/ui/SideNavItem'
import { useLocation } from 'react-router'
import { items } from '@widgets/dashboard/model/config'
import useResponsive from '@shared/hooks/useResponsive'

interface ISideNav {
  onClose: () => void,
  open: boolean,
}

export const SideNav: FC<ISideNav> = (props) => {
  const { open, onClose } = props
  const { isDesktop } = useResponsive()
  const location = useLocation()

  const content = (
    <Box sx={{
      height: '100%',
      backgroundColor: 'secondary.main',
    }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Box sx={{ p: '16px' }}>
          <Box
            component={NavLink}
            to="/"
            sx={{
              display: 'inline-flex',
              height: 32,
              width: 32,
            }}
          >
            <BigBoostIcon/>
          </Box>
        </Box>
        <Divider sx={{ borderColor: 'common.white' }}/>
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            px: 2,
            py: 3,
          }}
        >
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: 'none',
              p: 0,
              m: 0,
            }}
          >
            {items.map((item) => {
              const active = item.path ? (location.pathname === item.path || location.pathname === (item.path + '/')) : false
              return (
                <SideNavItem
                  active={active}
                  disabled={item.disabled}
                  external={item.external}
                  iconType={item.iconType}
                  key={item.title}
                  path={item.path}
                  title={item.title}
                />
              )
            })}
          </Stack>
        </Box>
      </Box>
    </Box>
  )

  if (isDesktop) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'secondary.main',
            color: 'common.white',
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    )
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'secondary.main',
          color: 'common.white',
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  )
}