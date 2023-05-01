import React, { FC } from 'react'

import styled from '@mui/material/styles/styled'
import { Box, BoxProps } from '@mui/material'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Scrollbar } from 'swiper'
import 'swiper/swiper.css'
import 'swiper/swiper-bundle.css'
import { FeedbackCard } from '@widgets/feedbackCard'
import { feedbackMockData } from '@widgets/feedbackCard/model/model'
import { BulletsSlider } from '@shared/ui/components/BulletsSlider'

SwiperCore.use([Autoplay, Scrollbar])

const SliderWrapper = styled(Box)<BoxProps>(
  ({ theme }) => ({
    position: 'relative',
    display: 'flex',
    width: '100%',
    padding: '50px 30px',
    background: theme.palette.customGray.mirage,
    borderRadius: '12px',
    '.swiper': {
      '&-slide': {
        width: 'auto',
        height: 'auto',
      }
    },
    '.swiper-pagination-bullet': {
      background: 'white !important',
      opacity: '1 !important',
      '&-active': {
        background: `${theme.palette.primary.main} !important`
      }
    }
  }))

export const PromoWhatOurCustomersSay: FC<{}> = () => (
  <SliderWrapper>
    <BulletsSlider>
      {feedbackMockData.map((feedback, index) => {
        return (
          <SwiperSlide key={index}>
            <FeedbackCard
              name={feedback.name}
              avatarSrc={feedback.avatarSrc}
              description={feedback.description}
              starCount={feedback.starCount}/>
          </SwiperSlide>
        )
      })}
    </BulletsSlider>
    <div className={'swiper-pagination'}></div>
  </SliderWrapper>
)
