import React, { FC } from 'react'

import styled from '@mui/material/styles/styled'
import { Box, Button, Typography } from '@mui/material'

import { IWrapperProps } from '@widgets/header/types/wrapperProps'
import { THeaderProps } from '@widgets/header/types/headerProps'
import { BigBoostIcon } from '@shared/ui/icons/BigBoostIcon'
import { Container } from '@shared/ui/components/Container'

export const Wrapper = styled(Box)<IWrapperProps>(
  ({ height, padding, theme }) => ({
    position: 'relative',
    zIndex: '5',
    display: 'flex',
    alignItems: 'center',
    height: height ?? '90px',
    padding: padding ?? '15px 0',
    backgroundColor: theme.palette.primary.main,
  }),
)

export const HeaderComponent: FC<THeaderProps> = ({
  padding,
  height,
}) => (
    <Wrapper padding={padding} height={height}>
      <Container>
        <Box display="flex" sx={{ justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <BigBoostIcon/>
          <Button
            variant="outlined"
          >
            <Typography>Client area</Typography>
          </Button>
        </Box>
      </Container>
    </Wrapper>
)
