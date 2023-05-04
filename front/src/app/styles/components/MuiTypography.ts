export const MuiTypography = {}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    menu1: true
    menu2: true
    statusNew: true
    statusError: true
    statusExcluded: true
    statusChanged: true
    statusActual: true
  }
}
