import React, { FC } from 'react'

import styled from '@mui/material/styles/styled'
import { Box, BoxProps } from '@mui/material'

import { PaymentIcon } from '@shared/ui/icons/PaymentIcon'
import { Container } from '@shared/ui/components/Container'

export const Wrapper = styled(Box)<BoxProps>(
  ({ theme }) => ({
    width: '100%',
    padding: '20px 0',
    background: theme.palette.primary.main,
    borderBottom: '1px solid white',
  }),
)

export const PaymentsComponent: FC<{}> = () => (
  <Wrapper>
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <PaymentIcon/>
      </Box>
    </Container>
  </Wrapper>
)
