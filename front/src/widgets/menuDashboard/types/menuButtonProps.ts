import { BoxProps } from '@mui/material'
import { PathMatch } from 'react-router/lib/router'

export interface IMenuButtonProps extends BoxProps {
  active: PathMatch<string> | null
}
