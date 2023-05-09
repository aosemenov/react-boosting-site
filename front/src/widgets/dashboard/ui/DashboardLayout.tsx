import React, { FC, useCallback, useState } from 'react'

import { TopNav } from '@widgets/dashboard/ui/TopNav'
import { SideNav } from '@widgets/dashboard/ui/SideNav'
import styled from '@mui/material/styles/styled'

const SIDE_NAV_WIDTH = 280;

const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  [theme.breakpoints.up('md')]: {
    paddingLeft: SIDE_NAV_WIDTH
  }
}));

const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%'
});

export const DashboardLayout: FC<any> = (props) => {
  const { children } = props
  const [openNav, setOpenNav] = useState(false)

  const handlePathnameChange = useCallback(
    () => {
      if (openNav) {
        setOpenNav(false)
      }
    },
    [openNav],
  )

  return (
    <>
      <TopNav onNavOpen={() => setOpenNav(true)}/>
      <SideNav
        onClose={() => setOpenNav(false)}
        open={openNav}
      />
      <LayoutRoot>
        <LayoutContainer>
          {children}
        </LayoutContainer>
      </LayoutRoot>
    </>
  )
}
