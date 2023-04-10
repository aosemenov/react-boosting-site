import React, { FC, memo, SVGProps } from 'react'

type IProps = SVGProps<SVGSVGElement> & {
  svgColor?: string
}

export const CrossIcon: FC<IProps> = memo(({ svgColor = 'currentColor' }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.70711 23.0203C8.31658 22.6298 8.31658 21.9966 8.70711 21.6061L21.6061 8.70711C21.9966 8.31658 22.6298 8.31658 23.0203 8.70711L23.2929 8.97972C23.6834 9.37024 23.6834 10.0034 23.2929 10.3939L10.3939 23.2929C10.0034 23.6834 9.37024 23.6834 8.97972 23.2929L8.70711 23.0203Z"
        fill={svgColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.0203 23.2929C22.6298 23.6834 21.9966 23.6834 21.6061 23.2929L8.70711 10.3939C8.31658 10.0034 8.31658 9.37024 8.70711 8.97972L8.97972 8.70711C9.37024 8.31658 10.0034 8.31658 10.3939 8.70711L23.2929 21.6061C23.6834 21.9966 23.6834 22.6298 23.2929 23.0203L23.0203 23.2929Z"
        fill={svgColor}
      />
    </svg>
  )
})
