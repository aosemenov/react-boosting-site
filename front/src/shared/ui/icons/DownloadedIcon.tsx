import React, { FC, memo, SVGProps } from 'react'

type IProps = SVGProps<SVGSVGElement> & {
  svgColor?: string
}

export const DownloadedIcon: FC<IProps> = memo(
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
          d="M3.33335 1.26685H2.93335V1.66685V15.8335V16.2335H3.33335H4.68752H5.41666V17.95V18.75H6.21666H16.2833H17.0833V17.95V4.55001V3.75001H16.2833H14.5667V1.66685V1.26685H14.1667H3.33335ZM13.7667 3.75001V2.06685H3.73335V15.4335H4.68752H5.41666V4.55001V3.75001H6.21666H13.7667ZM6.21666 4.55001H16.2833V17.95H6.21666V4.55001Z"
          fill={svgColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.9166 8.74997H7.91663V7.74997H12.9166V8.74997Z"
          fill={svgColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.75 11.2501H7.91663V10.2501H13.75V11.2501Z"
          fill={svgColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.25 13.75H7.91663V12.75H11.25V13.75Z"
          fill={svgColor}
        />
      </svg>
    )
  },
)
