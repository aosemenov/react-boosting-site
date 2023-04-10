import React, { FC } from 'react'

import styled from '@mui/material/styles/styled'
import { Box, BoxProps, Button,  Typography } from '@mui/material'

import { menuItemPopoverModel } from '@widgets/menu/model/menuPopoverModel'
import { usePushToPage } from '@shared/hooks/useToPage'
import { MenuItemPopover } from '@widgets/menu/ui/MenuItemPopover'
import { NavButton } from '@shared/ui/components/NavButton'

const Wrapper = styled(Box)<BoxProps>(
  ({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '700px',
  }),
)

export const DesktopMenu: FC<{}> = () => {
  const goToCoaching = usePushToPage('coaching')

  return (
    <Wrapper>
      <Box sx={{ display: 'flex' }}>
        {menuItemPopoverModel.map((item, index) =>
          <Box key={index} sx={{ marginRight: '24px' }}>
            <MenuItemPopover title={item.title} menuList={item.menuList}/>
          </Box>
        )}
        <Box sx={{ marginRight: '24px' }}>
          <NavButton onClick={goToCoaching}>
            Coaching
          </NavButton>
        </Box>
      </Box>
      <Box>
        <Button
          variant="outlined"
        >
          <Typography>Client area</Typography>
        </Button>
      </Box>
    </Wrapper>
  )
}
