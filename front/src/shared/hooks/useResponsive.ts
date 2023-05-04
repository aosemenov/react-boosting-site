import { useMediaQuery, useTheme } from '@mui/material'

const useResponsive = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between('xx','xs'))
  const isTablet = useMediaQuery(theme.breakpoints.between('sm','md'))
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const isDesktopHD = useMediaQuery(theme.breakpoints.up('xl'))

  return { isMobile, isTablet, isDesktop, isDesktopHD }
}

export default useResponsive
