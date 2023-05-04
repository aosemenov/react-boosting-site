import React, { FC, memo, SVGProps } from 'react'

type IProps = SVGProps<SVGSVGElement> & {
  svgColor?: string
}

export const ExportIcon: FC<IProps> = memo(({ svgColor = 'currentColor' }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.625 7.5L10.625 14.375L11.4375 13.4375L12.3125 14.3125L10.375 16.25L9.625 16.25L7.6875 14.3125L8.5625 13.4375L9.375 14.4375L9.375 7.5L10.625 7.5ZM15 9.375L16.25 9.375C16.25 5.9375 13.4375 3.125 10 3.125C6.5625 3.125 3.75 5.9375 3.75 9.375L5 9.375C5 6.625 7.25 4.375 10 4.375C12.75 4.375 15 6.625 15 9.375Z"
        fill={svgColor}
      />
    </svg>
  )
})
