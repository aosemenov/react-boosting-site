import MuiButton, { ButtonProps } from '@mui/material/Button'
import styled from '@mui/material/styles/styled'

export const Button = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  position: 'relative',
  display: 'inline-flex',
  justifyContent: 'center',
  padding: '8px 12px',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  borderRadius: '28px',
  userSelect: 'none',
  [theme.breakpoints.up('md')]: {
    backgroundColor: 'red',
  },
}))
