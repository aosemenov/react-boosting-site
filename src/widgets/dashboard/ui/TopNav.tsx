import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Stack,
  SvgIcon,
  Tooltip,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import React, { FC } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import SearchIcon from '@mui/icons-material/Search'
import LeaderboardIcon from '@mui/icons-material/Leaderboard'

import { AccountPopover } from '@widgets/dashboard/ui/AccountPopover'
import { usePopover } from '@shared/hooks/usePopover'
import useResponsive from '@shared/hooks/useResponsive'

const SIDE_NAV_WIDTH = 280
const TOP_NAV_HEIGHT = 64

export const TopNav: FC<any> = (props) => {
  const { onNavOpen } = props
  const { isDesktop } = useResponsive()
  const accountPopover = usePopover()

  return (
    <>
      <Box
        component="header"
        sx={{
          backdropFilter: 'blur(6px)',
          backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
          position: 'sticky',
          left: {
            lg: `${SIDE_NAV_WIDTH}px`,
          },
          top: 0,
          width: {
            lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`,
          },
          zIndex: (theme) => theme.zIndex.appBar,
          borderBottom: (theme) => `1px solid ${theme.palette.secondary.main}`
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2,
          }}
        >
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
          >
            {!isDesktop && (
              <IconButton onClick={onNavOpen}>
                <SvgIcon fontSize="small">
                  <LeaderboardIcon/>
                </SvgIcon>
              </IconButton>
            )}
            <Tooltip title="Search">
              <IconButton>
                <SvgIcon fontSize="small">
                  <SearchIcon/>
                </SvgIcon>
              </IconButton>
            </Tooltip>
          </Stack>
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
          >
            <Tooltip title="Contacts">
              <IconButton>
                <SvgIcon fontSize="small">
                  <PeopleAltIcon/>
                </SvgIcon>
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
              <IconButton>
                <Badge
                  badgeContent={4}
                  color="success"
                  variant="dot"
                >
                  <SvgIcon fontSize="small">
                    <NotificationsIcon/>
                  </SvgIcon>
                </Badge>
              </IconButton>
            </Tooltip>
            <Avatar
              onClick={accountPopover.handleOpen}
              ref={accountPopover.anchorRef}
              sx={{
                cursor: 'pointer',
                height: 40,
                width: 40,
              }}
              src="/media/images/clientArea/avatar-1.png"
            />
          </Stack>
        </Stack>
      </Box>
      <AccountPopover
        anchorEl={accountPopover.anchorRef.current}
        open={accountPopover.open}
        onClose={accountPopover.handleClose}
      />
    </>
  )
}
