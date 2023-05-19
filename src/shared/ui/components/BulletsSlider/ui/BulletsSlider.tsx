import React, { FC } from 'react'

import { Swiper } from 'swiper/react'
import SwiperCore, { Autoplay, Scrollbar, Navigation, Pagination } from 'swiper'
import 'swiper/swiper.css'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Autoplay, Scrollbar, Navigation, Pagination])

export const BulletsSlider: FC = ({ children }) => (
    <Swiper
      className="bullets-slider"
      slidesPerView={1}
      pagination={{
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: 'swiper-pagination-bullet',
      }}
      breakpoints={{
          1024: {
            slidesPerView: 2,
          }
      }}
    >
      {children}
    </Swiper>
)
