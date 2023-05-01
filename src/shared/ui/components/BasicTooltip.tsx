import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { InformationIcon } from '@shared/ui/icons/InformationIcon'

export default function BasicTooltip() {
  return (
    <Tooltip title="Delete">
      <IconButton>
        <InformationIcon />
      </IconButton>
    </Tooltip>
  )
}
