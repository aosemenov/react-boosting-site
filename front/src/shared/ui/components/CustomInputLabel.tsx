import React from 'react'

import InputLabel, { InputLabelProps } from '@mui/material/InputLabel'
import styled from '@mui/material/styles/styled'

export const CustomInputLabel = styled(InputLabel)<InputLabelProps>(
  ({ theme }) => ({
    fontSize: '14px',
    fontWeight: '400',
    marginBottom: '4px',
    color: theme.palette.text.secondary,
  }),
)
