import React, { FC, useState } from 'react'

import styled from '@mui/material/styles/styled'
import { ToggleButton, ToggleButtonProps } from '@mui/material'

import { ToggleSingleCheckIcon } from '@shared/ui/icons/ToggleSingleCheckIcon'
import { ToggleDoubleCheckIcon } from '@shared/ui/icons/ToggleDoubleCheckIcon'

import { mainTheme } from '@app/styles/mainTheme'

const CustomToggleButton = styled(ToggleButton)<ToggleButtonProps>(
  ({ theme }) => ({
    width: '30px',
    padding: '0',
    border: 'none',
    '&.Mui-selected': {
      backgroundColor: 'transparent',
      ':hover': {
        backgroundColor: 'transparent',
      },
    },
    ':hover': {
      backgroundColor: 'transparent',
    },
  }),
)

export const ToggleButtonCheck: FC<{}> = () => {
  const [selected, setSelected] = useState(false)

  return (
    <CustomToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        if (!selected) {
          setSelected(true)
        }
      }}
    >
      {selected ? (
        <ToggleSingleCheckIcon svgColor={mainTheme.palette.primary.main} />
      ) : (
        <ToggleDoubleCheckIcon svgColor={mainTheme.palette.primary.main} />
      )}
    </CustomToggleButton>
  )
}
