import { outlinedInputClasses } from '@mui/material/OutlinedInput'

export const MuiOutlinedInput = {
  styleOverrides: {
    root: {
      minWidth: 'auto',
      [`&.${outlinedInputClasses.input}`]: {
      },
      [`&.${outlinedInputClasses.focused}`]: {
        [`& .${outlinedInputClasses.notchedOutline}`]: {

        },
      },
      [`&.${outlinedInputClasses.disabled}`]: {
        ':hover': {
          [`& .${outlinedInputClasses.notchedOutline}`]: {

          },
        },
      },
      ':hover': {
        [`& .${outlinedInputClasses.notchedOutline}`]: {

        },
      },
    },
    notchedOutline: {
    },
  },
}
