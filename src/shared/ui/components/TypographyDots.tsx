import styled from '@mui/material/styles/styled'
import { Typography, TypographyProps } from '@mui/material'

export const TypographyEllipsis = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }),
)
