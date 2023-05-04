import * as React from 'react'

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'

import { ILightTooltipProps } from '@shared/ui/types/lightTooltipProps'

export const LightTooltip = styled(
  ({ children, ...props }: ILightTooltipProps) => (
    <Tooltip
      {...props}
      arrow
      children={children}
      classes={{ popper: props.className }}
    />
  ),
)(({ width, theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    display: 'flex',
    maxWidth: width ?? '208px',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.common.white,
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.white,
    },
  },
}))
