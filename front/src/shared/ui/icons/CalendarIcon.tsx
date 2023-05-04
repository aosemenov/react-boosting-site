import React, { FC, memo, SVGProps } from 'react'

type IProps = SVGProps<SVGSVGElement> & {
  svgColor?: string
}

export const CalendarIcon: FC<IProps> = memo(
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
          d="M2.3999 13.6H13.5999V3.20001H10.3999V1.60001H9.5999V3.20001H6.3999V1.60001H5.5999V3.20001H2.3999V13.6ZM3.1999 12.8V6.40001H12.7999V12.8H3.1999ZM5.5999 4.80001V4.00001H3.1999V5.60001H12.7999V4.00001H10.3999V4.80001H9.5999V4.00001H6.3999V4.80001H5.5999Z"
          fill={svgColor}
        />
        <mask
          id="mask0_6647_110152"
          maskUnits="userSpaceOnUse"
          x="2"
          y="1"
          width="12"
          height="13"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.3999 13.6H13.5999V3.20001H10.3999V1.60001H9.5999V3.20001H6.3999V1.60001H5.5999V3.20001H2.3999V13.6ZM3.1999 12.8V6.40001H12.7999V12.8H3.1999ZM5.5999 4.80001V4.00001H3.1999V5.60001H12.7999V4.00001H10.3999V4.80001H9.5999V4.00001H6.3999V4.80001H5.5999Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_6647_110152)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0H16V16H0V0Z"
            fill={svgColor}
          />
        </g>
      </svg>
    )
  },
)
