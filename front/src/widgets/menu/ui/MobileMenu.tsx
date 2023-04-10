import React, { FC, useState } from 'react'
import styled from '@mui/material/styles/styled'
import { Box, Button, Drawer, Typography } from '@mui/material'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

export const StyledBurger = styled(Box)<any>(
  ({ theme }) => ({
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    cursor: 'pointer',
    borderRadius: '8px',
    background: theme.palette.common.white,
  }),
)

export const StyledDrawer = styled(Drawer)<any>(
  ({ theme }) => ({
    '.MuiPaper-root': {
      height: 'calc(100vh - 50%)',
      padding: '40px 20px 0',
      borderRadius: '24px 24px 0 0',
      background: theme.palette.common.white,
    },
  }),
)

export const MobileMenu: FC<{}> = () => {
  const [state, setState] = useState(false)

  const toggleDrawer = (open: boolean) => {
    setState(open)
  }

  return (
    <>
      <StyledBurger onClick={() => {
        toggleDrawer(!state)
      }}>
        {state ? <CloseIcon/> : <MenuIcon/>}
      </StyledBurger>
      <StyledDrawer
        anchor={'bottom'}
        open={state}
        onClose={() => toggleDrawer(false)}
      >
        <Typography variant='h2'>
          SERVICES
        </Typography>
        <Typography variant='body1'>
          Accounts
        </Typography>
        <Typography variant='body1'>
          Boosting
        </Typography>
        <Typography variant='body1'>
          Coaching
        </Typography>
        <Typography variant='h2'>
          OTHERS
        </Typography>
        <Typography variant='body1'>
          Contacts
        </Typography>
        <Button
          variant="outlined"
        >
          <Typography>Client area</Typography>
        </Button>
      </StyledDrawer>
    </>
  )
}
