import React, { FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router'

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material'

import { ToggleDownArrow } from '@shared/ui/icons/ToggleDownArrow'

import { MenuIcon } from '@widgets/menuDashboard/ui/MenuIcon'
import { MenuCustomGroupLink } from '@widgets/menuDashboard/ui/MenuCustomGroupLink'
import { TMenuGroup } from '@widgets/menuDashboard/types/menuItemGroupProps'
import { MenuTitles } from '@widgets/menuDashboard/types/menuTitles'

export const MenuItemGroup: FC<TMenuGroup> = ({ name, groupItem }) => {
  const location = useLocation()
  const [expanded, setExpanded] = useState<string | false>(false)

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        return setExpanded(MenuTitles.QUEUES)
      case '/queues/change':
        return setExpanded(MenuTitles.QUEUES)
      case '/queues/await':
        return setExpanded(MenuTitles.QUEUES)
      case '/queues/error':
        return setExpanded(MenuTitles.QUEUES)
      case '/lists/black':
        return setExpanded(MenuTitles.LISTS)
      case '/lists/await':
        return setExpanded(MenuTitles.LISTS)
      case '/lists/links':
        return setExpanded(MenuTitles.LISTS)
      case '/lists/clients':
        return setExpanded(MenuTitles.LISTS)
      case '/downloaded/pod-ft':
        return setExpanded(MenuTitles.DOWNLOADED)
      case '/downloaded/rfm-ft':
        return setExpanded(MenuTitles.DOWNLOADED)
      case '/downloaded/mvk':
        return setExpanded(MenuTitles.DOWNLOADED)
      default:
        return setExpanded(false)
    }
  }, [location])

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <Box sx={{ m: '8px 0' }}>
      <Typography
        color="primary.darkest"
        sx={{
          fontSize: '10px',
          lineHeight: '12px',
          margin: '0 4px 4px',
          textTransform: 'uppercase',
        }}
      >
        {name}
      </Typography>
      {groupItem.map(item => (
        <Accordion
          key={item.title}
          expanded={expanded === item.title}
          onChange={handleChange(item.title)}
        >
          <AccordionSummary
            expandIcon={<ToggleDownArrow />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box sx={{ display: 'flex', mr: '8px' }}>
              <MenuIcon objectType={item.title} />
            </Box>
            <Typography variant="menu1" color="white">
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {item.subGroup.map(item => (
              <MenuCustomGroupLink key={item.path} to={item.path}>
                <Typography variant="menu2" color="white">
                  {item.title}
                </Typography>
              </MenuCustomGroupLink>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  )
}
