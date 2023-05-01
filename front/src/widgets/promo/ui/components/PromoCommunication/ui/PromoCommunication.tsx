import React, { FC } from 'react'

import styled from '@mui/material/styles/styled'
import { Box, BoxProps } from '@mui/material'
import { CommunicationCard } from '@shared/ui/components/CommunicationCard'
import { PrivateChatIcon } from '@shared/ui/icons/PrivateChatIcon'
import { SupportIcon } from '@shared/ui/icons/SupportIcon'
import { OrderTrackingIcon } from '@shared/ui/icons/OrderTrackingIcon'
import { Container } from '@shared/ui/components/Container'

const BackgroundWrapper = styled(Box)<BoxProps>(
  ({ theme }) => ({
    backgroundImage: 'url("/media/images/communication/com-bg.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.up(2060)]: {
      backgroundSize: 'contain',
    },
  }))

const Wrapper = styled(Box)<BoxProps>(
  ({ theme }) => ({
    position: 'relative',
    width: '100%',
    padding: '40px 0',
    '.promo-communication': {
      '&__grid': {
        position: 'relative',
        display: 'flex',
        [theme.breakpoints.up(2060)]: {
          justifyContent: 'center',
        },
        '&:nth-child(1)': {
          top: '-40px',
          justifyContent: 'flex-start',
        },
        '&:nth-child(2)': {
          justifyContent: 'center',
        },
        '&:nth-child(3)': {
          top: '40px',
          justifyContent: 'flex-end',
        },
      },
    },
  }),
)

export const PromoCommunication: FC<{}> = () => (
  <Wrapper className={'promo-communication'}>
    <BackgroundWrapper>
      <Container>
        <Box className={'promo-communication__grid'}>
          <CommunicationCard
            iconComponent={<SupportIcon/>}
            title={'24/7 Support'}
            description={'Our 24/7 support is always happy to answer any questions you may have.'}
          />
        </Box>
        <Box className={'promo-communication__grid'}>
          <CommunicationCard
            iconComponent={<PrivateChatIcon/>}
            title={'Private Chat'}
            description={'A private chat room with your booster is always at your service.'}
          />
        </Box>
        <Box className={'promo-communication__grid'}>
          <CommunicationCard
            iconComponent={<OrderTrackingIcon/>}
            title={'Order Tracking'}
            description={'Track the real-time status of your order, rating progress, and expected completion time.'}
          />
        </Box>
      </Container>
    </BackgroundWrapper>
  </Wrapper>
)
