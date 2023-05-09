import { Box, Divider, MenuItem, MenuList, Popover, Typography } from '@mui/material'
import React, { FC } from 'react'

interface IAccountPopover {
  anchorEl: any,
  onClose: () => void,
  open: boolean
}

export const AccountPopover: FC<IAccountPopover> = (props) => {
  const { anchorEl, onClose, open } = props

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom',
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 200 } }}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">
          Account
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          Anika Visser
        </Typography>
      </Box>
      <Divider/>
      <MenuList
        disablePadding
        dense
        sx={{
          p: '8px',
          '& > *': {
            borderRadius: 1,
          },
        }}
      >
        <MenuItem>
          Sign out
        </MenuItem>
      </MenuList>
    </Popover>
  )
}
