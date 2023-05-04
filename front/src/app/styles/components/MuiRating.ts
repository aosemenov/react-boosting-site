import { ratingClasses } from '@mui/material/Rating'

export const MuiRating = {
  styleOverrides: {
    root: {
      [`.${ratingClasses.iconEmpty}`]: {
        color: '#FFFFFF',
      },
      [`.${ratingClasses.iconFilled}`]: {
        color: '#FC0344',
      },
    },
  },
}
