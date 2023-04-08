import React, { FC } from 'react'

import styled from '@mui/material/styles/styled'
import { Box, Button } from '@mui/material'

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
    height: height ?? '100px',
    padding: padding ?? '15px 0',
  }),
)

export const HeaderComponent: FC<THeaderProps> = ({
  padding,
  height,
}) => (
  <Container>
    <Wrapper padding={padding} height={height}>
      <Box display='flex' sx={{ justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <BigBoostIcon />
        <Button
          variant="primary"
        >
          Зона клиента
        </Button>
      </Box>
    </Wrapper>
  </Container>
)
