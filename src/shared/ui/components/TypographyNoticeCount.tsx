import styled from '@mui/material/styles/styled'
import { Typography, TypographyProps } from '@mui/material'

export const TypographyNoticeCount = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    fontWeight: '400',
    lineHeight: '32px',
    color: theme.palette.customGray.gray2,
  }),
)
