import React from 'react'
import { Routes, Route } from 'react-router-dom'

import CssBaseline from '@mui/material/CssBaseline'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import { Box } from '@mui/material'

import { mainTheme } from './styles/mainTheme'
import { routesConfig } from '@app/routersConfig'
import { RoutePage } from '@pages/routePage'

export const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline/>
      <Box
        component="main"
        sx={{
          display: 'flex',
          overflowX: 'hidden',
          height: '100%',
          width: '100%',
        }}
      >
        <Routes>
          {routesConfig && routesConfig.map(v =>
            <Route key={v.alias} path={v.path} element={
               <RoutePage alias={v.alias} title={v.title} />
            }/>
          )}
        </Routes>
      </Box>
    </ThemeProvider>
  )
}
