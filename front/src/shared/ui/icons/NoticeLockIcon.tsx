import React, { FC, memo, SVGProps } from 'react'

type IProps = SVGProps<SVGSVGElement> & {
  svgColor?: string
}

export const NoticeLockIcon: FC<IProps> = memo(
  ({ svgColor = 'currentColor' }) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.8 9.6V7.2C16.8 5.92696 16.2943 4.70606 15.3941 3.80589C14.4939 2.90571 13.273 2.4 12 2.4C10.727 2.4 9.50606 2.90571 8.60589 3.80589C7.70571 4.70606 7.2 5.92696 7.2 7.2V9.6H6V15.6C6 17.1913 6.63214 18.7174 7.75736 19.8426C8.88258 20.9679 10.4087 21.6 12 21.6C13.5913 21.6 15.1174 20.9679 16.2426 19.8426C17.3679 18.7174 18 17.1913 18 15.6V9.6H16.8ZM8.4 7.2C8.4 6.24522 8.77928 5.32955 9.45442 4.65442C10.1295 3.97929 11.0452 3.6 12 3.6C12.9548 3.6 13.8705 3.97929 14.5456 4.65442C15.2207 5.32955 15.6 6.24522 15.6 7.2V9.6H8.4V7.2ZM16.8 15.6C16.8 16.873 16.2943 18.0939 15.3941 18.9941C14.4939 19.8943 13.273 20.4 12 20.4C10.727 20.4 9.50606 19.8943 8.60589 18.9941C7.70571 18.0939 7.2 16.873 7.2 15.6V10.8H16.8V15.6ZM10.8 14.4C10.8 14.0817 10.9264 13.7765 11.1515 13.5515C11.3765 13.3264 11.6817 13.2 12 13.2C12.3183 13.2 12.6235 13.3264 12.8485 13.5515C13.0736 13.7765 13.2 14.0817 13.2 14.4C13.1967 14.6074 13.1396 14.8103 13.0345 14.9891C12.9293 15.1679 12.7796 15.3163 12.6 15.42V18H11.4V15.408C11.2221 15.3054 11.0735 15.1588 10.9684 14.9823C10.8634 14.8058 10.8054 14.6053 10.8 14.4Z"
          fill={svgColor}
        />
      </svg>
    )
  },
)