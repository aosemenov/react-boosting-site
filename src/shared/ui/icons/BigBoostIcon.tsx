import React, { FC, memo, SVGProps } from 'react'
import { NavLink } from 'react-router-dom'
import { paths } from '@app/paths/paths'
import { Link } from '@mui/material'

type IProps = SVGProps<SVGSVGElement> & {
  svgColor?: string
}

export const BigBoostIcon: FC<IProps> = memo(
  ({ svgColor = 'currentColor' }) => {
    return (
      <Link to={'/'} component={NavLink}>
        <svg width="171" height="26" viewBox="0 0 171 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.178 0.238001C16.762 0.238001 18.598 0.804668 19.686 1.938C20.502 2.79933 20.91 3.88733 20.91 5.202C20.91 5.65533 20.8647 6.13134 20.774 6.63L20.468 8.262C20.2187 9.554 19.7313 10.5627 19.006 11.288C18.3033 12.0133 17.68 12.376 17.136 12.376L17.102 12.648C17.7367 12.648 18.3827 12.9993 19.04 13.702C19.6973 14.4047 20.026 15.232 20.026 16.184C20.026 16.5693 19.9807 16.9773 19.89 17.408L19.686 18.462C19.3233 20.4113 18.4507 21.9413 17.068 23.052C15.708 24.1627 13.804 24.718 11.356 24.718H0L4.318 0.238001H14.178ZM11.118 14.722H7.888L7.072 19.414H10.302C10.3473 19.414 10.3927 19.414 10.438 19.414C11.4807 19.414 12.308 19.176 12.92 18.7C13.532 18.2013 13.838 17.6007 13.838 16.898C13.838 15.4473 12.9313 14.722 11.118 14.722ZM12.036 5.542H9.486L8.602 10.608H11.118C13.294 10.608 14.382 9.656 14.382 7.752C14.382 7.09467 14.178 6.562 13.77 6.154C13.3847 5.746 12.8067 5.542 12.036 5.542Z"
            fill="white"/>
          <path d="M32.7837 0.238001L28.4997 24.718H22.3457L26.6637 0.238001H32.7837Z" fill="white"/>
          <path
            d="M41.8367 25.194C38.6181 25.194 36.3967 24.446 35.1727 22.95C34.3341 21.9073 33.9147 20.4793 33.9147 18.666C33.9147 17.8273 34.0054 16.9093 34.1867 15.912L35.3767 9.112C36.4421 3.03733 40.1594 0 46.5287 0C49.1581 0 51.1527 0.566667 52.5127 1.7C53.8727 2.81067 54.5527 4.34067 54.5527 6.29C54.5527 7.08333 54.4394 7.888 54.2127 8.704C54.0087 9.52 53.8047 10.132 53.6007 10.54L53.2607 11.152H47.2427C47.8321 10.336 48.1267 9.39533 48.1267 8.33C48.1267 6.29 47.2767 5.27 45.5767 5.27C43.2874 5.27 41.9161 6.596 41.4627 9.248L40.3067 15.776C40.1934 16.388 40.1367 16.9887 40.1367 17.578C40.1367 19.142 41.0547 19.924 42.8907 19.924C44.7494 19.924 45.9394 18.9947 46.4607 17.136H43.6727L44.3527 13.362H53.3627L52.8187 16.286L52.6487 17.272C51.6967 22.5533 48.0927 25.194 41.8367 25.194Z"
            fill="white"/>
          <path
            d="M69.5608 0.238001C72.1448 0.238001 73.9808 0.804668 75.0688 1.938C75.8848 2.79933 76.2928 3.88733 76.2928 5.202C76.2928 5.65533 76.2475 6.13134 76.1568 6.63L75.8508 8.262C75.6015 9.554 75.1141 10.5627 74.3888 11.288C73.6861 12.0133 73.0628 12.376 72.5188 12.376L72.4848 12.648C73.1195 12.648 73.7655 12.9993 74.4228 13.702C75.0801 14.4047 75.4088 15.232 75.4088 16.184C75.4088 16.5693 75.3635 16.9773 75.2728 17.408L75.0688 18.462C74.7061 20.4113 73.8335 21.9413 72.4508 23.052C71.0908 24.1627 69.1868 24.718 66.7388 24.718H55.3828L59.7008 0.238001H69.5608ZM66.5008 14.722H63.2708L62.4548 19.414H65.6848C65.7301 19.414 65.7755 19.414 65.8208 19.414C66.8635 19.414 67.6908 19.176 68.3028 18.7C68.9148 18.2013 69.2208 17.6007 69.2208 16.898C69.2208 15.4473 68.3141 14.722 66.5008 14.722ZM67.4188 5.542H64.8688L63.9848 10.608H66.5008C68.6768 10.608 69.7648 9.656 69.7648 7.752C69.7648 7.09467 69.5608 6.562 69.1528 6.154C68.7675 5.746 68.1895 5.542 67.4188 5.542Z"
            fill="white"/>
          <path
            d="M90.9545 0C96.4172 0 99.1485 2.23267 99.1485 6.698C99.1485 7.446 99.0692 8.25067 98.9105 9.112L97.7205 15.912C97.1765 19.0627 95.9978 21.3973 94.1845 22.916C92.3712 24.4347 89.8212 25.194 86.5345 25.194C83.2478 25.194 80.9585 24.4347 79.6665 22.916C78.7825 21.8733 78.3405 20.434 78.3405 18.598C78.3405 17.782 78.4312 16.8867 78.6125 15.912L79.8025 9.112C80.8678 3.03733 84.5852 0 90.9545 0ZM87.4525 19.924C88.5858 19.924 89.4925 19.6293 90.1725 19.04C90.8525 18.4507 91.3285 17.3627 91.6005 15.776L92.7565 9.248C92.8245 8.79467 92.8585 8.38667 92.8585 8.024C92.8585 6.188 91.9292 5.27 90.0705 5.27C87.7359 5.31533 86.3419 6.64133 85.8885 9.248L84.7325 15.776C84.6418 16.3427 84.5965 16.932 84.5965 17.544C84.5965 19.1307 85.5485 19.924 87.4525 19.924Z"
            fill="white"/>
          <path
            d="M113.533 0C118.995 0 121.727 2.23267 121.727 6.698C121.727 7.446 121.647 8.25067 121.489 9.112L120.299 15.912C119.755 19.0627 118.576 21.3973 116.763 22.916C114.949 24.4347 112.399 25.194 109.113 25.194C105.826 25.194 103.537 24.4347 102.245 22.916C101.361 21.8733 100.919 20.434 100.919 18.598C100.919 17.782 101.009 16.8867 101.191 15.912L102.381 9.112C103.446 3.03733 107.163 0 113.533 0ZM110.031 19.924C111.164 19.924 112.071 19.6293 112.751 19.04C113.431 18.4507 113.907 17.3627 114.179 15.776L115.335 9.248C115.403 8.79467 115.437 8.38667 115.437 8.024C115.437 6.188 114.507 5.27 112.649 5.27C110.314 5.31533 108.92 6.64133 108.467 9.248L107.311 15.776C107.22 16.3427 107.175 16.932 107.175 17.544C107.175 19.1307 108.127 19.924 110.031 19.924Z"
            fill="white"/>
          <path
            d="M129.379 17.748C129.379 19.312 130.501 20.094 132.745 20.094C135.011 20.094 136.145 19.3913 136.145 17.986C136.145 17.238 135.759 16.626 134.989 16.15C134.218 15.674 133.277 15.2773 132.167 14.96C131.079 14.6427 129.979 14.28 128.869 13.872C127.781 13.4413 126.851 12.784 126.081 11.9C125.31 10.9933 124.925 9.87133 124.925 8.534C124.925 2.84467 128.585 0 135.907 0C138.581 0 140.599 0.51 141.959 1.53C143.341 2.52733 144.033 3.92133 144.033 5.712C144.033 6.36933 143.942 7.004 143.761 7.616C143.602 8.20533 143.432 8.62467 143.251 8.874L142.979 9.282H136.961C137.459 8.76067 137.709 8.10333 137.709 7.31C137.709 5.83667 136.745 5.1 134.819 5.1C132.393 5.1 131.181 5.87067 131.181 7.412C131.181 8.18267 131.566 8.79467 132.337 9.248C133.107 9.70133 134.037 10.064 135.125 10.336C136.235 10.5853 137.346 10.9027 138.457 11.288C139.567 11.6733 140.508 12.3193 141.279 13.226C142.049 14.11 142.435 15.266 142.435 16.694C142.435 19.5727 141.573 21.7147 139.851 23.12C138.128 24.5027 135.476 25.194 131.895 25.194C128.313 25.194 125.865 24.5593 124.551 23.29C123.576 22.338 123.089 21.0233 123.089 19.346C123.089 18.7113 123.157 18.02 123.293 17.272L123.395 16.728H129.515L129.447 17.136C129.401 17.3627 129.379 17.5667 129.379 17.748Z"
            fill="white"/>
          <path
            d="M169.174 5.542H160.81L157.444 24.718H151.29L154.656 5.542H146.258L147.21 0.238001H170.126L169.174 5.542Z"
            fill="white"/>
        </svg>
      </Link>
    )
  },
)
