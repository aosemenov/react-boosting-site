import React, { FC, memo, SVGProps } from 'react'

type IProps = SVGProps<SVGSVGElement> & {
  svgColor?: string
}

export const SortTableIcon: FC<IProps> = memo(
  ({ svgColor = 'currentColor' }) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 18L8.88231 13.5L15.1177 13.5L12 18Z" fill="#333333" />
        <path d="M12 7.19995L15.1177 11.7H8.8823L12 7.19995Z" fill="#CECECE" />
      </svg>
    )
  },
)
