import React, { FC, memo, SVGProps } from 'react'

type IProps = SVGProps<SVGSVGElement> & {
  svgColor?: string
}

export const CheckboxFieldIcon: FC<IProps> = memo(
  ({ svgColor = '#CECECE' }) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="19"
          height="19"
          rx="3.5"
          fill="none"
          stroke={svgColor}
        />
      </svg>
    )
  },
)
