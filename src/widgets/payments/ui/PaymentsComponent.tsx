import React, { FC } from 'react'

import styled from '@mui/material/styles/styled'
import { Box, BoxProps, keyframes } from '@mui/material'

import { PaymentIcon } from '@shared/ui/icons/PaymentIcon'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Scrollbar } from 'swiper'
import 'swiper/swiper.css'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Autoplay, Scrollbar])

const SliderWrapper = styled(Box)<BoxProps>(
  ({ theme }) => ({
    display: 'flex',
    width: '100%',
    padding: '20px 0',
    background: theme.palette.primary.main,
    borderBottom: '1px solid white',
    '.swiper': {
      '&-slide': {
        width: 'auto',
        height: '40px',
      },
      '.swiper-wrapper': {
        margin: 0,
        transitionTimingFunction: 'linear !important',
      },
    }
  }))

export const PaymentsComponent: FC<{}> = () => (
  <SliderWrapper>
    <Swiper
      className="widget-slider"
      slidesPerView={'auto'}
      spaceBetween={35}
      centeredSlidesBounds
      centeredSlides
      speed={20000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      loop
      allowTouchMove={false}
    >
      <SwiperSlide>
        <PaymentIcon/>
      </SwiperSlide>
      <SwiperSlide>
        <PaymentIcon/>
      </SwiperSlide>
      <SwiperSlide>
        <PaymentIcon/>
      </SwiperSlide>
      <SwiperSlide>
        <PaymentIcon/>
      </SwiperSlide>
    </Swiper>
  </SliderWrapper>
)
