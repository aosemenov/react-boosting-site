import MuiButton, { ButtonProps } from '@mui/material/Button'
import styled from '@mui/material/styles/styled'

export const Button = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  // styles
  // theme props -> theme.palette.success.main,
}))
