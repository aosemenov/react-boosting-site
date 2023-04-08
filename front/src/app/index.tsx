import React from 'react'
import { Routes, Route } from 'react-router-dom'

import CssBaseline from '@mui/material/CssBaseline'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import { Box } from '@mui/material'

import { AxiosInstanceProvider } from '@shared/api'
import { MainPage } from '@pages/main'
import { paths } from '@app/paths/paths'

import { mainTheme } from './styles/mainTheme'

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
          <Route path={paths.root} element={<MainPage/>}/>
        </Routes>
      </Box>
    </ThemeProvider>
  )
}
