import React, { FC, useState } from 'react'
import styled from '@mui/material/styles/styled'
import { Box, Button, Drawer, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

export const StyledBurger = styled(Box)<any>(
  ({ theme }) => ({
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    color: theme.palette.common.white,
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
    '.menu-mobile': {
      display: 'flex',
      flexDirection: 'column',
      '&__item': {
        marginBottom: '12px',
        '&:last-of-type': {
          margin: 0,
        },
      },
    }
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
        {state ? <CloseIcon sx={{ width: 40, height: 40}}/> : <MenuIcon sx={{ width: 40, height: 40}}/>}
      </StyledBurger>
      <StyledDrawer
        anchor={'bottom'}
        open={state}
        onClose={() => toggleDrawer(false)}
      >
        <Box className="menu-mobile">
          <Typography className="menu-mobile__item" variant='menu1'>
            Accounts
          </Typography>
          <Typography className="menu-mobile__item" variant='menu1'>
            Boosting
          </Typography>
          <Typography className="menu-mobile__item" variant='menu1'>
            Coaching
          </Typography>
          <Typography className="menu-mobile__item" variant='menu1'>
            ClientArea
          </Typography>
          <Typography className="menu-mobile__item" variant='menu1'>
            Contacts
          </Typography>
        </Box>
      </StyledDrawer>
    </>
  )
}
