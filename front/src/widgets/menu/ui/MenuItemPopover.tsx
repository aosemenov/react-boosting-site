import * as React from 'react'
import Button from '@mui/material/Button'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import { FC } from 'react'
import { aliasToPath, navigateTo, usePushToPage } from '@shared/hooks/useToPage'
import { Box, BoxProps } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import * as Icon from '@widgets/menu/icons'
import { IMenuPopover } from '@widgets/menu/types/types'
import styled from '@mui/material/styles/styled'
import { NavButton } from '@shared/ui/components/NavButton'
import { useNavigate } from 'react-router-dom'

const StyledMenuIcon: FC<any> = ({ id, ...rest }: BoxProps & { id: string }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', width: '24px', marginRight: '16px' }} {...rest}>
    {id === 'csgo' && <Icon.CSGO/>}
    {id === 'valorant' && <Icon.Valorant/>}
  </Box>
)

const StyledMenuItem = styled(MenuItem)<MenuItemProps>(
  ({ theme }) => ({
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    borderRadius: '8px',
    padding: '10px 20px',
    transition: '.2s',
    color: theme.palette.text.primary,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  }),
)

const StyledNavButton = styled(NavButton)<any>(
  ({ open }) => ({
    opacity: open ? 0.7 : 1,
  }),
)

export const MenuItemPopover: FC<IMenuPopover> = ({ title, menuList }) => {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false)
  const prevOpen = React.useRef(open)
  const anchorRef = React.useRef<HTMLButtonElement>(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  const handleMenuItemClick = (event: Event | React.SyntheticEvent, alias: string) => {
    handleClose(event)
    navigate(aliasToPath(alias))
  }

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus()
    }

    prevOpen.current = open
  }, [open])

  return (
    <>
      <StyledNavButton
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        open={open}
        endIcon={<KeyboardArrowDownIcon/>}
      >
        {title}
      </StyledNavButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom"
        transition
        disablePortal
        sx={{ paddingTop: '16px' }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                  sx={{ padding: '12px 8px' }}
                >
                  {menuList.map((item, index) => (
                    <StyledMenuItem
                      key={index}
                      onClick={(event) => handleMenuItemClick(event, item.alias)}
                    >
                      <StyledMenuIcon id={item.icon}/>
                      {item.name}
                    </StyledMenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}