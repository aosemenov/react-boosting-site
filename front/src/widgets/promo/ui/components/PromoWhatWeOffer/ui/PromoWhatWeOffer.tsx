import React, { FC } from 'react'

import styled from '@mui/material/styles/styled'
import { Box, BoxProps, Grid } from '@mui/material'
import { ServiceCard } from '@shared/ui/components/ServiceCard'
import { ServiceCSGO } from '@shared/ui/icons/ServiceCSGO'
import { ServiceValorant } from '@shared/ui/icons/ServiceValorant'
import { ServiceAccounts } from '@shared/ui/icons/ServiceAccounts'
import { ServiceCoaching } from '@shared/ui/icons/ServiceCoaching'
import { aliasToPath } from '@shared/hooks/useToPage'
import { useNavigate } from 'react-router-dom'

export const Wrapper = styled(Box)<BoxProps>(
  ({ theme }) => ({
    position: 'relative',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      paddingBottom: '100px',
    },
  }),
)

export const PromoWhatWeOffer: FC<{}> = () => {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <Box>
        <Grid container spacing={2} rowSpacing={8} direction={{ xx: 'column', sm: 'row'}}>
          <Grid item xs={12} sm={6} md={3}>
            <Box onClick={() => {
              navigate(aliasToPath('csgoboosting'))
            }}>
              <ServiceCard
                iconComponent={<ServiceCSGO />}
                title={'CS:GO'}
                bgimage={'/media/images/services/services-cs.jpg'}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box onClick={() => {
              navigate(aliasToPath('valorantboosting'))
            }}>
              <ServiceCard // disabled
                iconComponent={<ServiceValorant />}
                title={'Valorant'}
                bgimage={'/media/images/services/services-valorant.png'} />
              </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box onClick={() => {
              navigate(aliasToPath('accounts'))
            }}>
              <ServiceCard // disabled
                iconComponent={<ServiceAccounts />}
                title={'Accounts'}
                bgimage={'/media/images/services/services-accounts.png'} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box onClick={() => {
              navigate(aliasToPath('coaching'))
            }}>
              <ServiceCard // disabled
                iconComponent={<ServiceCoaching />}
                title={'Coaching'}
                bgimage={'/media/images/services/services-coaching.png'} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  )
}