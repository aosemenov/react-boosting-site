import React, { FC, memo, SVGProps } from 'react'
import { NavLink } from 'react-router-dom'
import { paths } from '@app/paths/paths'
import { Link } from '@mui/material'

type IProps = SVGProps<SVGSVGElement> & {
  svgColor?: string
}

export const ServiceAccounts: FC<IProps> = memo(
  ({ svgColor = 'currentColor' }) => {
    return (
      <svg width="102" height="84" viewBox="0 0 102 84" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50.9997 23.6304L39.945 7.8623H24.1211L50.9997 46.2021L77.8783 7.8623H62.0543L50.9997 23.6304Z"
              fill="white"/>
        <path d="M81.5592 7.8623L50.9991 51.4521L20.4389 7.8623H3.13477L50.9991 76.1385L98.8634 7.8623H81.5592Z"
              fill="white"/>
      </svg>
    )
  },
)
