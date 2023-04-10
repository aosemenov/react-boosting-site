import React, { FC, memo, SVGProps } from 'react'

type IProps = SVGProps<SVGSVGElement> & {
  svgColor?: string
}

export const ToggleDoubleCheckIcon: FC<IProps> = memo(
  ({ svgColor = 'currentColor' }) => {
    return (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="15" cy="15" r="15" fill="white" />
        <path
          d="M19.6278 9.75001L13.7946 16.8317L11.077 14.0455L9.75 15.3608C9.75 15.3608 13.7663 19.5 13.8923 19.5C14.0419 19.4939 21 11.014 21 11.014L19.6278 9.75001Z"
          fill={svgColor}
        />
      </svg>
    )
  },
)
