import React, { FC } from 'react'

import styled from '@mui/material/styles/styled'

import { Box, BoxProps, Grid, Typography } from '@mui/material'
import { BigBoostIcon } from '@shared/ui/icons/BigBoostIcon'
import { routesConfig } from '@app/routersConfig'
import { Route, Routes } from 'react-router-dom'
import { RoutePage } from '@pages/routePage'
import { RegisterForm } from '@widgets/registerForm'
import { mainTheme } from '@app/styles/mainTheme'

export const RegisterComponent: FC<any> = (props) => {
  const { children } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        flex: '1 1 auto'
      }}
    >
      <Grid
        container
        sx={{ flex: '1 1 auto' }}
      >
        <Grid
          xs={12}
          md={4}
          sx={{
            backgroundColor: `${mainTheme.palette.secondary.main}`,
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            width: '100%',
            boxShadow: '14px 0px 25px 0px rgba(69, 0, 18, 0.35)',
          }}
        >
          <Box
            component="header"
            sx={{
              left: 0,
              p: 3,
              position: 'static',
              top: 0,
              width: '100%'
            }}
          >
            <Box
              sx={{
                display: 'inline-flex',
              }}
            >
              <BigBoostIcon />
            </Box>
          </Box>
          <RegisterForm />
        </Grid>
        <Grid
          xs={12}
          md={8}
          sx={{
            alignItems: 'center',
            background: `${mainTheme.palette.primary.main}`,
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            minHeight: '150px',
            backgroundImage: 'url("/media/images/bg-simple.png")',
            backgroundSize: 'auto',
            backgroundRepeat: 'repeat',
          }}
        >
        </Grid>
      </Grid>
    </Box>
  )
}
