import React, { FC, memo, SVGProps } from 'react'

type IProps = SVGProps<SVGSVGElement> & {
  svgColor?: string
}

export const TelegramIcon: FC<IProps> = memo(({ svgColor = 'currentColor' }) => {
  return (
    <svg className={'hoverIcon'} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.5001 2.91675C9.45008 2.91675 2.91675 9.45008 2.91675 17.5001C2.91675 25.5501 9.45008 32.0834 17.5001 32.0834C25.5501 32.0834 32.0834 25.5501 32.0834 17.5001C32.0834 9.45008 25.5501 2.91675 17.5001 2.91675ZM24.2667 12.8334C24.048 15.1376 23.1001 20.7376 22.6188 23.3188C22.4147 24.4126 22.0063 24.7772 21.6272 24.8209C20.7813 24.8938 20.1397 24.2667 19.323 23.7272C18.0397 22.8813 17.3105 22.3563 16.0709 21.5397C14.6272 20.5917 15.5605 20.0667 16.3917 19.2209C16.6105 19.0022 20.3438 15.6042 20.4167 15.298C20.4269 15.2516 20.4255 15.2035 20.4128 15.1577C20.4001 15.112 20.3764 15.07 20.3438 15.0355C20.2563 14.9626 20.1397 14.9917 20.0376 15.0063C19.9063 15.0355 17.8647 16.3917 13.8834 19.0751C13.3001 19.4688 12.7751 19.673 12.3084 19.6584C11.7834 19.6438 10.7917 19.3667 10.048 19.1188C9.12925 18.8272 8.41466 18.6667 8.473 18.1563C8.50216 17.8938 8.86675 17.6313 9.55216 17.3542C13.8105 15.5022 16.6397 14.2772 18.0542 13.6938C22.1084 12.0022 22.9397 11.7105 23.4938 11.7105C23.6105 11.7105 23.8876 11.7397 24.0626 11.8855C24.2084 12.0022 24.2522 12.1626 24.2667 12.2792C24.2522 12.3667 24.2813 12.6292 24.2667 12.8334Z"
        fill={svgColor}/>
    </svg>
  )
})
