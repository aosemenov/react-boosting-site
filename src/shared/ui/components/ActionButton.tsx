import React, { FC, useState } from 'react'

import { Button, Menu, MenuItem, MenuProps } from '@mui/material'
import { menuClasses } from '@mui/material/Menu'
import { menuItemClasses } from '@mui/material/MenuItem'
import styled from '@mui/material/styles/styled'

import { DotsIcon } from '@shared/ui/icons/DotsIcon'

import { TActionButtonProps } from '@shared/ui/types/actionButtonProps'

const ActionsMenu = styled(Menu)<MenuProps>(({ theme }) => ({
  [`& .${menuClasses.paper}`]: {
    maxWidth: '310px',
    maxHeight: '200px',
    margin: '14px 0',
    '&::-webkit-scrollbar': {
      width: '4px',
      height: '5px',
    },
    '&::-webkit-scrollbar-track': {
      margin: '8px 0',
      backgroundColor: 'transparent',
      borderRadius: '2px',
      border: '8px solid white',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#D9D9D9',
      borderRadius: '2px',
    },
  },
  [`& .${menuItemClasses.root}`]: {
    padding: '8px',
    '&:hover': {
      backgroundColor: '#EDFCF4',
    },
  },
  [`& .${menuItemClasses.gutters}`]: {
    fontSize: '14px',
    whiteSpace: 'normal',
  },
}))

export const ActionButton: FC<TActionButtonProps> = ({ options }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        variant="primary"
        size="small"
        endIcon={<DotsIcon />}
        onClick={handleClick}
      >
        Действие
      </Button>
      <ActionsMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {options.map(option => (
          <MenuItem key={option} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </ActionsMenu>
    </>
  )
}
