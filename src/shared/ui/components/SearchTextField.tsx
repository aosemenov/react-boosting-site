import * as React from 'react'
import { FC } from 'react'

import {
  Badge,
  BadgeProps,
  Box,
  InputAdornment,
  TextFieldProps,
} from '@mui/material'
import TextField from '@mui/material/TextField'
import styled from '@mui/material/styles/styled'

import { TSearchTextFieldProps } from '@shared/ui/types/searchTextFieldProps'
import { SearchIcon } from '@shared/ui/icons/SearchIcon'

const CustomTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  '& .MuiInputBase-root': {
    height: '28px',
    cursor: 'pointer',
    backgroundColor: theme.palette.secondary.lightest,
    '&.MuiInputBase-adornedStart': {
      paddingLeft: '8px',
      paddingRight: '32px',
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: `1px solid ${theme.palette.secondary.lightest}`,
  },
  '& .MuiInputAdornment-root': {
    marginRight: '0',
    color: theme.palette.secondary.main,
  },
  '& .MuiInputBase-input': {
    width: '0',
  },
}))

const CustomInputBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  right: '16px',
  transform: 'translateY(-50%)',
}))

export const SearchTextField: FC<TSearchTextFieldProps> = ({
  onClick,
  placeholder,
  count,
  ...params
}) => {
  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <CustomTextField
          {...params}
          size="small"
          onClick={onClick}
          InputProps={{
            readOnly: true,
            startAdornment: (
              <>
                <InputAdornment disablePointerEvents position="start">
                  <Box sx={{ display: 'flex', mr: '4px' }}>
                    <SearchIcon />
                  </Box>
                  {placeholder}
                </InputAdornment>
                {count > 0 && (
                  <CustomInputBadge badgeContent={count} color="primary" />
                )}
              </>
            ),
          }}
        />
      </Box>
    </>
  )
}
