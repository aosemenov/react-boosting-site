import React, { FC, memo, SVGProps } from 'react'

type IProps = SVGProps<SVGSVGElement> & {
  svgColor?: string
}

export const InformationIcon: FC<IProps> = memo(
  ({ svgColor = 'currentColor' }) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 2C14.4131 2 18 5.5869 18 10C18 14.4131 14.4131 18 10 18C5.5869 18 2 14.4131 2 10C2 5.5869 5.5869 2 10 2ZM10.0278 7C9.75 7 9.5 6.89189 9.30556 6.7027C9.11111 6.51351 9 6.27027 9 6C9 5.72973 9.11111 5.48649 9.30556 5.2973C9.52778 5.10811 9.75 5 10 5C10.25 5 10.5 5.10811 10.6944 5.2973C10.9167 5.48649 11 5.72973 11 6C11 6.27027 10.8889 6.51351 10.6944 6.7027C10.5556 6.91892 10.3056 7 10.0278 7ZM11 15V9H9V15H11Z"
          fill={svgColor}
        />
      </svg>
    )
  },
)
