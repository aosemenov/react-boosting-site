import React, { FC, memo, SVGProps } from 'react'

type IProps = SVGProps<SVGSVGElement> & {
  svgColor?: string
}

export const NoticeMenuIcon: FC<IProps> = memo(
  ({ svgColor = 'currentColor' }) => {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.1868 13.6705C15.0338 13.9738 14.7229 14.1652 14.3832 14.1652H10.2437V14.8852C10.2437 15.2173 10.1118 15.5358 9.87697 15.7706C9.64214 16.0055 9.32365 16.1374 8.99156 16.1374C8.65946 16.1374 8.34096 16.0054 8.10614 15.7706C7.87131 15.5358 7.73938 15.2173 7.73938 14.8852V14.1652H3.59996C3.26017 14.1652 2.94935 13.9738 2.79636 13.6705C2.64336 13.3671 2.67427 13.0034 2.87627 12.7302C3.03666 12.5132 3.17852 12.2822 3.29992 12.0394C3.62304 11.3931 3.79249 10.681 3.79503 9.95848V6.99651C3.79503 5.61831 4.34252 4.29655 5.31706 3.32201C6.2916 2.34748 7.61335 1.79999 8.99156 1.79999C10.3698 1.79999 11.6915 2.34748 12.6661 3.32201C13.6406 4.29655 14.1881 5.61831 14.1881 6.99651L14.1881 9.95477L14.1881 9.95709C14.1904 10.6801 14.3599 11.3927 14.6832 12.0394C14.8046 12.2822 14.9465 12.5132 15.1068 12.7302C15.3088 13.0034 15.3398 13.3671 15.1868 13.6705ZM13.2881 9.96L13.2881 9.95477L13.2881 6.99651C13.2881 5.857 12.8354 4.76416 12.0297 3.95841C11.2239 3.15266 10.1311 2.69999 8.99156 2.69999C7.85205 2.69999 6.75921 3.15266 5.95346 3.95841C5.1477 4.76416 4.69503 5.857 4.69503 6.99651V9.96C4.69235 10.7932 4.50341 11.615 4.14251 12.3652C4.13018 12.3908 4.11764 12.4164 4.1049 12.4419C3.9602 12.7313 3.79112 13.0066 3.59996 13.2652H8.63938V14.8852C8.63938 14.9786 8.67649 15.0682 8.74253 15.1342C8.80858 15.2003 8.89815 15.2374 8.99156 15.2374C9.08496 15.2374 9.17454 15.2003 9.24058 15.1342C9.30663 15.0682 9.34373 14.9786 9.34373 14.8852V13.2652H14.3832C14.192 13.0066 14.0229 12.7313 13.8782 12.4419C13.8655 12.4164 13.8529 12.3908 13.8406 12.3652C13.4797 11.615 13.2908 10.7932 13.2881 9.96Z"
          fill={svgColor}
        />
      </svg>
    )
  },
)
