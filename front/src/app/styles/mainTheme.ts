import { createTheme, Theme, ThemeOptions } from '@mui/material/styles'
import { MuiTypography } from '@app/styles/components/MuiTypography'
import { MuiButton } from './components/MuiButton'
import { MuiRating } from '@app/styles/components/MuiRating'
import { MuiSvgIcon } from '@app/styles/components/MuiSvgIcon'

export const mainTheme: Theme = createTheme(<ThemeOptions>{
  breakpoints: {
    values: {
      xx: 320,
      xs: 560,
      sm: 768,
      md: 1280,
      lg: 1440,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#FC0344',
    },
    secondary: {
      light: 'rgba(11, 11, 11, 0.6)',
      main: '#1F2326',
      darkest: '#0B0B0B'
    },
    customGray: {
      gray1: '#EDEDED',
      gray2: '#AFAFAF',
      mirage: 'rgba(26, 38, 50, 0.7)',
      mirage2: 'rgba(26, 38, 50, 1)',
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
      primary: '#1F2326',
      secondary: '#6C6C6C',
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    h1: {
      fontSize: '40px',
      fontStyle: 'normal',
      fontWeight: 800,
      lineHeight: '44px',
      color: '#333333',
    },
    h2: {
      fontSize: '40px',
      fontWeight: 400,
      lineHeight: '44px',
      color: 'white'
    },
    h3: {
      fontSize: '36px',
      fontWeight: 400,
      lineHeight: '42px',
      color: 'white'
    },
    h4: {
      fontSize: '28px',
      fontWeight: 400,
      lineHeight: '32px',
      color: 'white'
    },
    h5: {
      fontSize: '24px',
      fontWeight: 400,
      lineHeight: '28px',
      color: 'white'
    },
    body1: {
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '24px',
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
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '30px',
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
    MuiRating,
    MuiSvgIcon,
  },
})

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xx: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }

  interface PaletteColor {
    darkest?: string
    lightest?: string
    gray1?: string
    gray2?: string
    mirage?: string
    mirage2?: string
  }

  interface Palette {
    customGray: Palette['primary']
  }

  interface PaletteOptions {
    customGray: PaletteOptions['primary']
  }
}
