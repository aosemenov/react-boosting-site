import React, { FC, memo, SVGProps } from 'react'

type IProps = SVGProps<SVGSVGElement> & {
  svgColor?: string
}

export const ArrowBackIcon: FC<IProps> = memo(
  ({ svgColor = 'currentColor' }) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 11V21L12 16L18 11Z"
          fill={svgColor}
        />
      </svg>
    )
  },
)
