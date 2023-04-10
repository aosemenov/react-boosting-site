import React, { FC, memo, SVGProps } from 'react'

type IProps = SVGProps<SVGSVGElement> & {
  svgColor?: string
}

export const DotsIcon: FC<IProps> = memo(({ svgColor = '#FFFFFF' }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.075 12.6C9.73774 12.6 10.275 13.1373 10.275 13.8C10.275 14.4627 9.73774 15 9.075 15C8.41226 15 7.875 14.4627 7.875 13.8C7.875 13.1373 8.41226 12.6 9.075 12.6Z"
        fill={svgColor}
      />
      <path
        d="M9.075 7.8C9.73774 7.8 10.275 8.33726 10.275 9C10.275 9.66274 9.73774 10.2 9.075 10.2C8.41226 10.2 7.875 9.66274 7.875 9C7.875 8.33726 8.41226 7.8 9.075 7.8Z"
        fill={svgColor}
      />
      <path
        d="M9.075 3C9.73774 3 10.275 3.53726 10.275 4.2C10.275 4.86274 9.73774 5.4 9.075 5.4C8.41226 5.4 7.875 4.86274 7.875 4.2C7.875 3.53726 8.41226 3 9.075 3Z"
        fill={svgColor}
      />
    </svg>
  )
})
