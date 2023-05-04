import MuiButton, { ButtonProps } from '@mui/material/Button'
import styled from '@mui/material/styles/styled'

export const NavButton = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  position: 'relative',
  display: 'inline-flex',
  padding: 0,
  transition: '.1s',
  color: theme.palette.common.white,
  ':hover': {
    opacity: 0.7
  },
}))
