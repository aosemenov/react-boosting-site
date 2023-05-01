import React, { FC } from 'react'

import styled from '@mui/material/styles/styled'
import { Box, BoxProps, Button, Typography } from '@mui/material'
import { Section } from '@shared/ui/components/Section'
import { PromoCommunication } from '@widgets/promo/ui/components/PromoCommunication'
import { PromoSafety } from '@widgets/promo/ui/components/PromoSafety'
import { PromoOurBoosters } from '@widgets/promo/ui/components/PromoOurBoosters'
import { PromoWhatWeOffer } from '@widgets/promo/ui/components/PromoWhatWeOffer'
import { PromoWhatOurCustomersSay } from '@widgets/promo/ui/components/PromoWhatOurCustomersSay'
import { PromoTagline } from '@widgets/promo/ui/components/PromoTagline'

export const Wrapper = styled(Box)<BoxProps>(
  ({ theme }) => ({
    position: 'relative',
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      paddingTop: '120px',
    },
    '&::after': {
      position: 'absolute',
      top: 0,
      height: '20px',
      width: '100%',
      content: '\'\'',
      background: 'linear-gradient(#000000, transparent);',
      [theme.breakpoints.up('xs')]: {
        height: '100px',
      },
    }
  }),
)

export const Promo: FC<{}> = () => (
  <Wrapper>
    <Section title={'What we offer'} titleRedMode titleAlign={'center'}>
      <PromoWhatWeOffer />
    </Section>
    <Section title={'Our boosters'} titleRedMode titleAlign={'start'}>
      <PromoOurBoosters />
    </Section>
    <Section title={'Safety'} titleAlign={'center'}>
      <PromoSafety />
    </Section>
    <Section title={'Communication'} wide titleAlign={'start'}>
      <PromoCommunication />
    </Section>
    <Section title={'What our customers say'} titleAlign={'start'}>
      <PromoWhatOurCustomersSay />
    </Section>
    <Section>
      <PromoTagline />
    </Section>
  </Wrapper>
)
