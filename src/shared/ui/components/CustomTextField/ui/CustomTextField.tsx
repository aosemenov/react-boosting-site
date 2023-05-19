import styled from '@mui/material/styles/styled'
import { TextField, TextFieldProps } from '@mui/material'

export const CustomTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: `${theme.palette.common.white} !important`,
    '& .MuiInputLabel-asterisk': {
      color: theme.palette.error.main,
    },
    '&:Mui-focused': {
      color:`${theme.palette.common.white} !important`,
    },
  },
  '& .MuiFormLabel-root': {
    color: theme.palette.common.white,
  },
  '& .MuiInputBase-root': {
    alignItems: 'flex-end',
    height: '60px',
    padding: '0',
    backgroundColor: 'transparent',
    '& .MuiInputBase-input': {
      fontSize: '16px',
      color: theme.palette.common.white,
      '&:-webkit-autofill': {
        '-webkit-background-clip': 'text !important',
        '-webkit-text-fill-color': '#FFFFFF',
      },
    },
    '& .MuiIconButton-root': {
      position: 'absolute',
      right: '16px',
      top: '50%',
      width: '32px',
      height: '32px',
      transform: 'translateY(-50%)',
    },
    '&.Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        border: `1px solid rgba(255, 255, 255, 0.5) !important`,
      },
      '& .MuiIconButton-root': {
        display: 'block',
      },
    },
    '&::after, &::before': {
      display: 'none',
    },
    '&:hover': {
      '& .MuiIconButton-root': {
        display: 'block',
      },
      '& .MuiOutlinedInput-notchedOutline': {
        border: `2px solid rgba(255, 255, 255, 0.5) !important`,
      },
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: `2px solid rgba(255, 255, 255, 0.2) !important`,
    borderRadius: '8px',
  }
}))