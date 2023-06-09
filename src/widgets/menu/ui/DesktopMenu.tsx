import React, { FC } from 'react'

import styled from '@mui/material/styles/styled'
import { Box, BoxProps, Button, Typography } from '@mui/material'

import { menuItemPopoverModel } from '@widgets/menu/model/menuPopoverModel'
import { MenuItemPopover } from '@widgets/menu/ui/MenuItemPopover'
import { NavButton } from '@shared/ui/components/NavButton'
import { NavLink } from 'react-router-dom'
import { useAuthLink } from '@shared/hooks/useAuth'
import { paths } from '@app/paths/paths'
import { useAppSelector } from '@shared/hooks/store'

const Wrapper = styled(Box)<BoxProps>(
  ({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '700px',
  }),
)

export const DesktopMenu: FC<{}> = () => {
  const { isAuthorized } = useAppSelector(state => state.auth)
  const { link: clientAreaPath } = useAuthLink(paths.clientArea.dashboard.overview)

  return (
    <Wrapper>
      <Box sx={{ display: 'flex' }}>
        {menuItemPopoverModel.map((item, index) =>
          <Box key={index} sx={{ marginRight: '24px' }}>
            <MenuItemPopover title={item.title} menuList={item.menuList}/>
          </Box>
        )}
        <Box sx={{ marginRight: '24px' }}>
          <NavButton
            component={NavLink}
            to={"/coaching"}
          >
            Coaching
          </NavButton>
        </Box>
      </Box>
      <Box>
        <Button
          component={NavLink}
          to={clientAreaPath}
          variant="outlined"
        >
          <Typography>Client area</Typography>
        </Button>
      </Box>
    </Wrapper>
  )
}
