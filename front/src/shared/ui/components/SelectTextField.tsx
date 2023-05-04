import React, { FC } from 'react'

import { Badge, Box } from '@mui/material'
import TextField from '@mui/material/TextField'

import { TAutocompleteTextFieldProps } from '@shared/ui/types/autocompleteTextFieldProps'

export const SelectTextField: FC<TAutocompleteTextFieldProps> = ({
  placeholder,
  count,
  ...params
}) => {
  return (
    <>
      <Box sx={{ width: '150px', position: 'relative' }}>
        <TextField
          size="small"
          onKeyDown={(event: React.KeyboardEvent) => {
            if (event.key === 'Backspace') {
              event.stopPropagation()
            }
          }}
          placeholder={placeholder}
          {...params}
        />
        {count > 0 && <Badge badgeContent={count} color="primary" />}
      </Box>
    </>
  )
}
