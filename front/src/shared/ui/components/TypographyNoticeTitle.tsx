import styled from '@mui/material/styles/styled'
import { Typography, TypographyProps } from '@mui/material'

export const TypographyNoticeTitle = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    fontSize: '32px',
    fontWeight: '600',
    lineHeight: '40px',
  }),
)
