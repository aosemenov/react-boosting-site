import React, { FC, memo, SVGProps } from 'react'
import { NavLink } from 'react-router-dom'
import { paths } from '@app/paths/paths'
import { Link } from '@mui/material'

type IProps = SVGProps<SVGSVGElement> & {
  svgColor?: string
}

export const PrivateChatIcon: FC<IProps> = memo(
  ({ svgColor = 'currentColor' }) => {
    return (
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd"
              d="M9.5625 22.8012H3.375C2.4795 22.8012 1.62112 22.4409 0.988873 21.7991C0.355498 21.1583 0 20.2885 0 19.381C0 15.433 0 7.3682 0 3.42017C0 2.51269 0.355498 1.64282 0.988873 1.00211C1.62112 0.360259 2.4795 0 3.375 0C8.082 0 18.918 0 23.625 0C24.5205 0 25.3789 0.360259 26.0111 1.00211C26.6445 1.64282 27 2.51269 27 3.42017V19.381C27 20.2885 26.6445 21.1583 26.0111 21.7991C25.3789 22.4409 24.5205 22.8012 23.625 22.8012H17.4375L14.8286 26.3262C14.5147 26.7503 14.0231 27 13.5 27C12.9769 27 12.4853 26.7503 12.1714 26.3262L9.5625 22.8012ZM13.5 24.3209L15.975 20.9771C16.1876 20.6898 16.5206 20.521 16.875 20.521C16.875 20.521 20.9587 20.521 23.625 20.521C23.9231 20.521 24.21 20.4013 24.4204 20.187C24.6319 19.9738 24.75 19.6831 24.75 19.381V3.42017C24.75 3.11806 24.6319 2.82734 24.4204 2.61415C24.21 2.39982 23.9231 2.28012 23.625 2.28012C18.918 2.28012 8.082 2.28012 3.375 2.28012C3.07687 2.28012 2.79 2.39982 2.57962 2.61415C2.36812 2.82734 2.25 3.11806 2.25 3.42017C2.25 7.3682 2.25 15.433 2.25 19.381C2.25 19.6831 2.36812 19.9738 2.57962 20.187C2.79 20.4013 3.07687 20.521 3.375 20.521C6.04125 20.521 10.125 20.521 10.125 20.521C10.4794 20.521 10.8124 20.6898 11.025 20.9771L13.5 24.3209ZM6.75 17.1009H15.75C16.371 17.1009 16.875 16.5901 16.875 15.9608C16.875 15.3315 16.371 14.8208 15.75 14.8208H6.75C6.129 14.8208 5.625 15.3315 5.625 15.9608C5.625 16.5901 6.129 17.1009 6.75 17.1009ZM6.75 12.5406H20.25C20.871 12.5406 21.375 12.0299 21.375 11.4006C21.375 10.7713 20.871 10.2605 20.25 10.2605H6.75C6.129 10.2605 5.625 10.7713 5.625 11.4006C5.625 12.0299 6.129 12.5406 6.75 12.5406ZM6.75 7.98041H20.25C20.871 7.98041 21.375 7.46966 21.375 6.84035C21.375 6.21104 20.871 5.70029 20.25 5.70029H6.75C6.129 5.70029 5.625 6.21104 5.625 6.84035C5.625 7.46966 6.129 7.98041 6.75 7.98041Z"
              fill="white"/>
      </svg>
    )
  },
)