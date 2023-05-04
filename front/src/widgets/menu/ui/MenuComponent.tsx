import React, { FC } from 'react'

import styled from '@mui/material/styles/styled'
import { Box, BoxProps, Button, Menu, Typography } from '@mui/material'

import { IWrapperProps } from '@widgets/header/types/wrapperProps'
import { THeaderProps } from '@widgets/header/types/headerProps'
import { BigBoostIcon } from '@shared/ui/icons/BigBoostIcon'
import { Container } from '@shared/ui/components/Container'
import useResponsive from '@shared/hooks/useResponsive'
import { DesktopMenu } from '@widgets/menu/ui/DesktopMenu'
import { MobileMenu } from '@widgets/menu/ui/MobileMenu'

const Wrapper = styled(Box)<BoxProps>(
  ({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
  }),
)

export const MenuComponent: FC<{}> = () => {
  const { isDesktop } = useResponsive()

  return (
    <Wrapper>
      {isDesktop ?
        <DesktopMenu/> :
        <MobileMenu/>
      }
    </Wrapper>
  )
}
