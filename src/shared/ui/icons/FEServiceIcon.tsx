import React, { FC, memo, SVGProps } from 'react'

type IProps = SVGProps<SVGSVGElement> & {
  svgColor?: string
}

export const FEServiceIcon: FC<IProps> = memo(
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
          d="M4.21994 3.71001L3.99994 3.85001V8.28001C3.98772 12.0375 5.72038 15.5878 8.68994 17.89L8.82994 18H11.1699L11.3099 17.89C14.2795 15.5878 16.0122 12.0375 15.9999 8.28001V3.85001L15.7799 3.70001C12.2622 1.42214 7.73377 1.42606 4.21994 3.71001ZM4.99993 8.28001V4.40001C6.35708 3.5596 7.90554 3.07786 9.49993 3.00001V17H9.16993C6.5221 14.882 4.98644 11.6707 4.99993 8.28001ZM10.8299 17C13.4778 14.882 15.0134 11.6707 14.9999 8.28001V4.40001C13.6428 3.5596 12.0943 3.07786 10.4999 3.00001V17H10.8299Z"
          fill={svgColor}
        />
        <mask
          id="mask0_763_13602"
          maskUnits="userSpaceOnUse"
          x="3"
          y="1"
          width="13"
          height="17"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.21994 3.71001L3.99994 3.85001V8.28001C3.98772 12.0375 5.72038 15.5878 8.68994 17.89L8.82994 18H11.1699L11.3099 17.89C14.2795 15.5878 16.0122 12.0375 15.9999 8.28001V3.85001L15.7799 3.70001C12.2622 1.42214 7.73377 1.42606 4.21994 3.71001ZM4.99993 8.28001V4.40001C6.35708 3.5596 7.90554 3.07786 9.49993 3.00001V17H9.16993C6.5221 14.882 4.98644 11.6707 4.99993 8.28001ZM10.8299 17C13.4778 14.882 15.0134 11.6707 14.9999 8.28001V4.40001C13.6428 3.5596 12.0943 3.07786 10.4999 3.00001V17H10.8299Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_763_13602)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0H20V20H0V0Z"
            fill={svgColor}
          />
        </g>
      </svg>
    )
  },
)
