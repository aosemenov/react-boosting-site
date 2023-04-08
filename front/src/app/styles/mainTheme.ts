import { createTheme, Theme, ThemeOptions } from '@mui/material/styles'
import { MuiTypography } from '@app/styles/components/MuiTypography'
import { MuiButton } from './components/MuiButton'
import { basic } from '@app/styles/basic'


export const mainTheme: Theme = createTheme(<ThemeOptions>{
  palette: {
    primary: {
      main: '#F33041',
    },
    secondary: {
      main: '#6C6C6C',
    },
    customGray: {
      gray1: '#EDEDED',
      gray2: '#AFAFAF',
    },
    error: {
      main: '#F62434',
      light: '#FFE6E7',
    },
    success: {
      main: '#00B956',
      light: '#EDFCF4',
    },
    warning: {
      main: '#FFA717',
      light: '#FFF8EC',
    },
    info: {
      main: '#1991AB',
      light: '#E5F2FF',
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
    text: {
      primary: '#333333',
      secondary: '#6C6C6C',
    },
  },
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
    h1: {
      fontSize: '40px',
      fontStyle: 'normal',
      fontWeight: 800,
      lineHeight: '44px',
      color: '#333333',
    },
    h2: {
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '24px',
      color: '#333333',
    },
    h3: {
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '20px',
      color: '#6C6C6C',
    },
    body1: {
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '20px',
      color: '#333333',
    },
    body2: {
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '20px',
      color: '#333333',
    },
    menu1: {
      fontSize: '13px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '16px',
      color: '#333333',
    },
    menu2: {
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '16px',
      color: '#333333',
    },
  },
  components: {
    MuiButton,
    MuiTypography,
  },
})

declare module '@mui/material/styles' {
  interface PaletteColor {
    darkest?: string
    lightest?: string
    gray1?: string
    gray2?: string
  }

  interface Palette {
    customGray: Palette['primary']
  }

  interface PaletteOptions {
    customGray: PaletteOptions['primary']
  }
}