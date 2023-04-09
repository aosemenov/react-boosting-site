import { buttonClasses } from '@mui/material/Button'
import { mainTheme } from '@app/styles/mainTheme'

export const MuiButton = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      fontFamily: ['"Poppins"', 'sans-serif'].join(','),
      fontSize: '16px',
      fontWeight: 600,
      fontStyle: 'normal',
      lineHeight: '20px',
      width: 'fit-content',
      padding: '10px 25px',
      boxShadow: 'none',
      textTransform: 'none',
      borderRadius: '20px',
    },
    sizeSmall: {
      padding: '3px 16px',
    },
    primary: {
      color: '#FFFFFF',
      backgroundColor: '#FC0344',
      ':hover': {
        backgroundColor: '#A4121F',
      },
      [`&.${buttonClasses.disabled}`]: {
        color: '#FFFFFF',
        backgroundColor: '#9DA6B0',
      },
      [`& .${buttonClasses.endIcon}`]: {
        margin: '0',
        marginLeft: '2px',
      },
    },
    secondary: {
      color: '#10A064',
      backgroundColor: '#EDFCF4',
      ':hover': {
        backgroundColor: '#CBF2DE',
      },
      [`&.${buttonClasses.disabled}`]: {
        color: '#9DA6B0',
        backgroundColor: '#F6F6F6',
      },
    },
    outlined: {
      position: 'relative',
      display: 'inline-flex',
      justifyContent: 'center',
      padding: '8px 12px',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      borderRadius: '28px',
      userSelect: 'none',
      outline: 'none',
      border: '3px solid white',
      [`@media (min-width: 768px)`]: {
        padding: '8px 28px',
      },
      ':before': {
        position: 'absolute',
        top: '-2px',
        left: '-2px',
        bottom: '-2px',
        right: '-2px',
        zIndex: 0,

        content: "''",
        opacity: 0,

        outline: 'none',
        background: 'white',
        color: '#FC0344',
        borderRadius: '28px',

        transform: 'scale3d(.7, 1, 1)',
        transition: 'transform .4s, opacity .4s',
        transitionTimingFunction: 'cubic-bezier(.2, 1, .3, 1)',
      },
      ':hover': {
        border: '3px solid white',
        '&:before':
          {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        '.MuiTypography-root': {
          color: '#F33041',
        }
      },
      ['.MuiTypography-root']: {
        position: 'relative',
        zIndex: '1',
        fontWeight: 700,
        color: 'white',
      }
    },
    cancel: {
      color: '#333333',
      backgroundColor: '#F6F6F6',
      ':hover': {
        backgroundColor: '#CECECE',
      },
      [`&.${buttonClasses.disabled}`]: {
        color: '#9DA6B0',
        backgroundColor: '#F6F6F6',
      },
    },
  },
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    secondary: true
    primary: true
    cancel: true
  }
}
