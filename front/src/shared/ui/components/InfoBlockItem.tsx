import React, { FC } from 'react'

import { Box, Typography } from '@mui/material'

import { TInfoBlockItemProps } from '@shared/ui/types/infoBlockItemProps'

export const InfoBlockItem: FC<TInfoBlockItemProps> = ({
  label,
  value,
  color,
}) => {
  return (
    <>
      <Box sx={{ width: '160px', mr: '8px', flexShrink: '0' }}>
        <Typography variant="body2" sx={{ color: 'secondary.main' }}>
          {label}
        </Typography>
      </Box>
      <Box>
        <Typography color={color} variant="body2">
          {value}
        </Typography>
      </Box>
    </>
  )
}
