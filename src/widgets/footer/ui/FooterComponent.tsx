import React, { FC } from 'react'

import styled from '@mui/material/styles/styled'
import { Box, BoxProps, Grid, Typography } from '@mui/material'

import { BigBoostIcon } from '@shared/ui/icons/BigBoostIcon'
import { Container } from '@shared/ui/components/Container'
import { TelegramIcon } from '@shared/ui/icons/TelegramIcon'
import { SteamIcon } from '@shared/ui/icons/SteamIcon'
import { VkIcon } from '@shared/ui/icons/VkIcon'
import { DiscordIcon } from '@shared/ui/icons/DiscordIcon'

import { companyModel } from '@widgets/footer/model/companyModel'
import { InfoBlock } from '@widgets/footer/ui/InfoBlock'
import { servicesModel } from '@widgets/footer/model/servicesModel'
import { contactsModel } from '@widgets/footer/model/contactsModel'
import { Payments } from '@widgets/payments'

export const Wrapper = styled(Box)<BoxProps>(
  ({ theme }) => ({
    position: 'relative',
    zIndex: '5',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'auto',
    padding: '60px 0',
    backgroundColor: theme.palette.primary.main,
  }),
)

export const StyledLink = styled(Box)<BoxProps>(
  ({ theme }) => ({
    marginBottom: '20px',
    '.hoverIcon': {
      color: theme.palette.secondary.main,
      transition: '.3s',
      ':hover': {
        color: theme.palette.common.white,
      },
    },
    '&:last-child': {
      margin: '0',
    },
  }),
)

export const CopyrightWrapper = styled(Box)<BoxProps>(
  ({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40px',
    backgroundColor: theme.palette.secondary.main,
    width: '100%',
  }),
)

export const FooterComponent: FC<{}> = () => (
  <>
    <Payments/>
    <Wrapper>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ mb: '32px' }}>
              <BigBoostIcon/>
            </Box>
            <Grid container spacing={2}>
              <Grid item sm={3}>
                <InfoBlock title={'About us'} paths={companyModel}/>
              </Grid>
              <Grid item sm={3}>
                <InfoBlock title={'Service we provide'} paths={servicesModel}/>
              </Grid>
              <Grid item sm={3}>
                <InfoBlock title={'Support'} paths={contactsModel}/>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ marginLeft: '16px' }}>
            <StyledLink>
              <a href="#vk" target="_blank">
                <VkIcon/>
              </a>
            </StyledLink>
            <StyledLink>
              <a href="#discord" target="_blank">
                <DiscordIcon/>
              </a>
            </StyledLink>
            <StyledLink>
              <a href="#tg" target="_blank">
                <TelegramIcon/>
              </a>
            </StyledLink>
            <StyledLink>
              <a href="#steam" target="_blank">
                <SteamIcon/>
              </a>
            </StyledLink>
          </Box>
        </Box>
      </Container>
    </Wrapper>
    <CopyrightWrapper>
      <Typography variant="body2" sx={{ color: 'white', opacity: .3 }}>© 2022-2023 BigBoost - All Rights
        Reserved</Typography>
    </CopyrightWrapper>
  </>
)
