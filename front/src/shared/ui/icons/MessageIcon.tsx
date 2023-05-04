import React, { FC, memo, SVGProps } from 'react'

type IProps = SVGProps<SVGSVGElement> & {
  svgColor?: string
}

export const MessageIcon: FC<IProps> = memo(({ svgColor = 'currentColor' }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1160_23817"
        maskUnits="userSpaceOnUse"
        x="2"
        y="4"
        width="16"
        height="13"
      >
        <path
          d="M3 15.0002V5.77224L7.953 11.1082C8.48 11.6752 9.227 12.0002 10 12.0002C10.773 12.0002 11.52 11.6752 12.047 11.1072L17 5.77224V15.0002H3ZM16.354 5.00024L11.314 10.4272C10.638 11.1552 9.362 11.1542 8.686 10.4282L3.646 5.00024H16.354ZM2 16.0002H18V4.00024H2V16.0002Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_1160_23817)">
        <path
          d="M3 15.0002V5.77224L7.953 11.1082C8.48 11.6752 9.227 12.0002 10 12.0002C10.773 12.0002 11.52 11.6752 12.047 11.1072L17 5.77224V15.0002H3ZM16.354 5.00024L11.314 10.4272C10.638 11.1552 9.362 11.1542 8.686 10.4282L3.646 5.00024H16.354ZM2 16.0002H18V4.00024H2V16.0002Z"
          fill={svgColor}
        />
        <path d="M32 -12H-12V32H32V-12Z" fill={svgColor} />
      </g>
    </svg>
  )
})
