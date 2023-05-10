import { Box, BoxProps, ButtonBase, SvgIcon } from '@mui/material'
import { NavLink } from 'react-router-dom'
import React, { FC } from 'react'

import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import ListAltIcon from '@mui/icons-material/ListAlt';

interface ISideNavItemProps {
  active: boolean,
  disabled?: boolean,
  external?: boolean,
  iconType: string,
  path: string,
  title: string,
}

const StyledMenuIcon: FC<any> = ({ iconType }: BoxProps & { iconType: string }) => (
  <>
    {iconType === 'overview' && <HomeIcon/>}
    {iconType === 'orders' && <ListAltIcon/>}
    {iconType === 'settings' && <SettingsIcon/>}
  </>
)

export const SideNavItem: FC<ISideNavItemProps> = (props) => {
  const { active = false, disabled, external, iconType, path, title } = props

  const linkProps = path
    ? external
      ? {
        component: 'a',
        href: path,
        target: '_blank',
      }
      : {
        component: NavLink,
        to: path,
      }
    : {}

  return (
    <li>
      <ButtonBase
        sx={{
          alignItems: 'center',
          borderRadius: 1,
          display: 'flex',
          justifyContent: 'flex-start',
          pl: '16px',
          pr: '16px',
          py: '6px',
          textAlign: 'left',
          width: '100%',
          ...(active && {
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
          }),
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
          },
        }}
        {...linkProps}
      >
        {iconType && (
          <Box
            component="span"
            sx={{
              alignItems: 'center',
              color: 'neutral.400',
              display: 'inline-flex',
              justifyContent: 'center',
              mr: 2,
              ...(active && {
                color: 'primary.main',
              }),
            }}
          >
            <StyledMenuIcon iconType={iconType}/>
          </Box>
        )}
        <Box
          component="span"
          sx={{
            color: 'common.white',
            flexGrow: 1,
            fontFamily: (theme) => theme.typography.fontFamily,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: '24px',
            whiteSpace: 'nowrap',
            ...(active && {
              color: 'common.white',
            }),
            ...(disabled && {
              color: 'common.white',
            }),
          }}
        >
          {title}
        </Box>
      </ButtonBase>
    </li>
  )
}