import React, { FC, memo, SVGProps } from 'react'

type IProps = SVGProps<SVGSVGElement> & {
  svgColor?: string
}

export const CheckboxArrowIcon: FC<IProps> = memo(
  ({ svgColor = 'currentColor' }) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.54275 6.9724L2 7.5L6.5346 12L14.1135 4.5276L13.5708 4.00001C13.2751 3.71258 12.7957 3.71257 12.5 4L6.5346 9.90395L3.61353 6.9724C3.31784 6.68497 2.83843 6.68497 2.54275 6.9724Z"
          fill={svgColor}
        />
      </svg>
    )
  },
)
