import React, { FC, memo, SVGProps } from 'react'

type IProps = SVGProps<SVGSVGElement> & {
  svgColor?: string
}

export const SearchIcon: FC<IProps> = memo(({ svgColor = 'currentColor' }) => {
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
        d="M10.976 11.936C10.0851 12.4982 9.05357 12.7977 8.00004 12.8C5.28453 12.7847 2.97137 10.8233 2.51227 8.14682C2.05318 5.47036 3.58049 2.85023 6.13566 1.93082C8.69083 1.01141 11.5374 2.05771 12.8889 4.41308C14.2404 6.76844 13.7072 9.75398 11.624 11.496L13.6 13.896L12.984 14.4L10.976 11.936ZM12.8 7.2C12.8 4.54903 10.651 2.4 8.00004 2.4C5.34907 2.4 3.20004 4.54903 3.20004 7.2C3.20004 9.85096 5.34907 12 8.00004 12C10.651 12 12.8 9.85096 12.8 7.2Z"
        fill={svgColor}
      />
      <mask
        id="mask0_6648_89873"
        maskUnits="userSpaceOnUse"
        x="2"
        y="1"
        width="12"
        height="14"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.976 11.936C10.0851 12.4982 9.05357 12.7977 8.00004 12.8C5.28453 12.7847 2.97137 10.8233 2.51227 8.14682C2.05318 5.47036 3.58049 2.85023 6.13566 1.93082C8.69083 1.01141 11.5374 2.05771 12.8889 4.41308C14.2404 6.76844 13.7072 9.75398 11.624 11.496L13.6 13.896L12.984 14.4L10.976 11.936ZM12.8 7.2C12.8 4.54903 10.651 2.4 8.00004 2.4C5.34907 2.4 3.20004 4.54903 3.20004 7.2C3.20004 9.85096 5.34907 12 8.00004 12C10.651 12 12.8 9.85096 12.8 7.2Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_6648_89873)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H16V16H0V0Z"
          fill={svgColor}
        />
      </g>
    </svg>
  )
})
