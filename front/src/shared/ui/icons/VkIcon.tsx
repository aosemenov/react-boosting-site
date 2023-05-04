import React, { FC, memo, SVGProps } from 'react'
import { createSvgIcon } from '@mui/material'

type IProps = SVGProps<SVGSVGElement> & {
  svgColor?: string
}


export const VkIcon: FC<IProps> = memo(({ svgColor = 'currentColor' }) => {
  return (
    <svg className='hoverIcon' width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.9815 2.91675H13.0332C4.86071 2.91675 2.91675 4.86071 2.91675 13.0186V21.967C2.91675 30.138 4.84612 32.0834 13.0186 32.0834H21.967C30.138 32.0834 32.0834 30.154 32.0834 21.9815V13.0332C32.0834 4.86071 30.154 2.91675 21.9815 2.91675ZM26.463 23.7272H24.3353C23.5303 23.7272 23.2882 23.0753 21.8445 21.6315C20.5845 20.4167 20.0522 20.2651 19.7328 20.2651C19.2924 20.2651 19.1713 20.3861 19.1713 20.9942V22.9076C19.1713 23.4253 19.0036 23.7286 17.6517 23.7286C16.3398 23.6405 15.0675 23.2418 13.9397 22.5656C12.8119 21.8894 11.861 20.955 11.1651 19.8392C9.51304 17.783 8.36354 15.3696 7.808 12.7911C7.808 12.4717 7.92904 12.183 8.53716 12.183H10.6634C11.2103 12.183 11.4072 12.4265 11.6215 12.988C12.654 16.0272 14.4157 18.6697 15.1303 18.6697C15.4045 18.6697 15.524 18.5486 15.524 17.8647V14.7351C15.4336 13.3074 14.6753 13.1863 14.6753 12.6701C14.685 12.5339 14.7474 12.4069 14.8493 12.316C14.9511 12.225 15.0843 12.1773 15.2207 12.183H18.5632C19.0197 12.183 19.1713 12.4105 19.1713 12.9574V17.1807C19.1713 17.6372 19.3682 17.7888 19.5053 17.7888C19.7795 17.7888 19.9909 17.6372 20.4926 17.1355C21.5701 15.8215 22.4504 14.3575 23.1059 12.7897C23.1729 12.6013 23.2997 12.4401 23.4669 12.3306C23.6341 12.221 23.8325 12.1692 24.032 12.183H26.1597C26.797 12.183 26.9326 12.5024 26.797 12.9574C26.0233 14.6905 25.066 16.3357 23.9415 17.8647C23.7126 18.2147 23.6207 18.397 23.9415 18.8067C24.153 19.1261 24.8982 19.7488 25.3999 20.3409C26.1289 21.0681 26.7343 21.9094 27.1922 22.8317C27.3745 23.4238 27.0697 23.7272 26.463 23.7272Z"
        fill={svgColor}/>
    </svg>
  )
})
