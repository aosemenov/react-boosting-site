import React, { FC } from 'react'

import { Box, BoxProps, Button, Container, SvgIcon, Typography } from '@mui/material'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import styled from '@mui/material/styles/styled'
import { NavLink } from 'react-router-dom'

const Wrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100%',
  padding: '80px 0',
  background: theme.palette.secondary.main,
}))

export const Block404: FC = () => (
  <Wrapper>
    <Box
      component="main"
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexGrow: 1,
        minHeight: '100%',
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              mb: 3,
              textAlign: 'center',
            }}
          >
            <img
              alt="Under development"
              src="/media/images/errors/error-404.png"
              style={{
                display: 'inline-block',
                maxWidth: '100%',
                width: 400,
              }}
            />
          </Box>
          <Typography
            align="center"
            sx={{ mb: 3 }}
            color="common.white"
            variant="h1"
          >
            404: The page you are looking for isn’t here
          </Typography>
          <Typography
            align="center"
            color="common.white"
            variant="body1"
          >
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation
          </Typography>
          <Button
            component={NavLink}
            to="/"
            startIcon={(
              <SvgIcon fontSize="small">
                <ArrowBackIosIcon color={'inherit'}/>
              </SvgIcon>
            )}
            sx={{ mt: 5 }}
            variant="outlined"
          >
            <Typography>Go back</Typography>
          </Button>
        </Box>
      </Container>
    </Box>
  </Wrapper>
)