import React, { FC } from 'react'

import styled from '@mui/material/styles/styled'
import { Box, BoxProps, Button, ButtonGroup, Typography } from '@mui/material'
import { Container } from '@shared/ui/components/Container'

export const Wrapper = styled(Box)<BoxProps>(
  ({ theme }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 'calc(100vh - 90px)',
    minHeight: '500px',
    paddingBottom: '40px',
    background: theme.palette.common.black,
    '.banner': {
      '&__title': {
        fontFamily: 'Fugaz One, sans-serif',
        fontSize: '48px',
        fontWeight: '400',
        lineHeight: '52px',
        textTransform: 'uppercase',
        marginBottom: '40px',
        color: theme.palette.common.white,
        [theme.breakpoints.up('xs')]: {
          fontSize: '70px',
          lineHeight: '77px',
        },
        '&-color': {
          background: '-webkit-linear-gradient(top left, rgba(252,3,68, 1) 60%, #F2E206)',
          'WebkitBackgroundClip': 'text',
          'WebkitTextFillColor': 'transparent',
        },
      },
      '&__content': {
        position: 'relative',
        zIndex: '1',
        maxWidth: '580px',
      },
      '&__subtitle': {
        fontSize: '20px',
        fontWeight: 400,
        lineHeight: '26px',
        [theme.breakpoints.up('xs')]: {
          fontSize: '24px',
          lineHeight: '28px',
        },
      },
      '&__actions': {
        marginTop: '40px',
        '&-button': {
          outline: `3px solid ${theme.palette.primary.main}`,
          borderRadius: '25px',
          '&-item': {
            minWidth: '120px !important',
            background: 'transparent',
            '&:first-of-type': {
              borderRight: `3px solid ${theme.palette.primary.main} !important`,
            },
          },
        },
      },
      '&__video': {
        width: '100%',
        height: '100%',
        opacity: '1',
        '&-wrapper': {
          position: 'absolute',
          top: 0,
          right: 0,
          height: '100%',
          transition: '1s opacity',
          opacity: .3,
          [theme.breakpoints.up('md')]: {
            opacity: 1,
          },
        },
      },
    }
  }),
)

export const BannerComponent: FC<{}> = () => (
  <Wrapper className="banner">
    <Container>
      <Box className="banner__content">
        <Typography className="banner__title" variant={'h1'}>
          Your new way to the
          <span className="banner__title-color"> top</span>
        </Typography>
        <Typography className="banner__subtitle" variant={'h5'}>
          Maximize your gaming experience and reach your goals with our reliable boosting service
        </Typography>
        <Box className="banner__actions">
          <ButtonGroup
            disableElevation
            variant="contained"
            size="large"
            color="primary"
            className="banner__actions-button"
          >
            <Button disableRipple className="banner__actions-button-item">Rank up</Button>
            <Button disableRipple className="banner__actions-button-item">Buy account</Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Container>
      <Box className="banner__video-wrapper">
        <video className="banner__video" muted autoPlay loop>
          <source type="video/mp4" src="/media/video/voy_f.mp4"/>
        </video>
      </Box>
  </Wrapper>
)
