import React, { FC, memo, SVGProps } from 'react'

type IProps = SVGProps<SVGSVGElement> & {
  svgColor?: string
}

export const ToggleSingleCheckIcon: FC<IProps> = memo(
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
          d="M17.6278 9.75L11.7946 16.8317L9.07704 14.0455L7.75 15.3608C7.75 15.3608 11.7663 19.5 11.8923 19.5C12.0419 19.4939 19 11.014 19 11.014L17.6278 9.75Z"
          fill={svgColor}
        />
        <path
          d="M21.6278 9.75L15.7946 16.8317L13.827 14.6847L12.5 16C12.5 16 15.7663 19.5 15.8923 19.5C16.0419 19.4939 23 11.014 23 11.014L21.6278 9.75Z"
          fill={svgColor}
        />
      </svg>
    )
  },
)
