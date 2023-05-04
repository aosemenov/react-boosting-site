import React, { FC, useEffect, useState } from 'react'

import styled from '@mui/material/styles/styled'
import { Box, BoxProps, keyframes, Typography, TypographyProps } from '@mui/material'
import { mainTheme } from '@app/styles/mainTheme'

const Wrapper = styled(Box)<BoxProps & { align?: string }>(({ theme, align }) => ({
  display: 'flex',
  justifyContent: align ?? 'center',
  [`@media (max-width: 767px)`]: {
    justifyContent: 'center',
  },
}))

const HighlightTypography = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    fontFamily: 'Fugaz One, sans-serif',
    textTransform: 'uppercase',
    color: 'text.primary',
    whiteSpace: 'pre-wrap',
    [`@media (max-width: 1279px)`]: {
      fontSize: '36px',
      lineHeight: '40px',
    },
    [`@media (max-width: 767px)`]: {
      fontSize: '28px',
      lineHeight: '30px',
    },
  }))

const HighlightBoxTypography = styled(Box)<BoxProps>(
  ({ theme }) => ({
    position: 'relative',
    display: 'flex',
    width: 'fit-content',
    padding: '0 10px',
    cursor: 'default',
    '&:before': {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: '-10px',
      width: '100%',
      height: '3px',
      content: '\'\'',
      transition: '.8s all',
      filter: 'drop-shadow(1px 0px 8px rgba(243, 48, 65, 0.95))',
      background: 'linear-gradient(90deg, rgba(246,36,52,1) 2%, rgba(252,3,68,1) 61%, rgba(241,146,63,1) 98%);',
      backgroundSize: '100% 100%',
    },
  }),
)

type TSectionTitleProps = {
  title: string
  align?: 'start' | 'center' | 'end'
  titleRedMode: boolean
}

export const SectionTitle: FC<TSectionTitleProps> = ({ title, align, titleRedMode }) => {
  const [lastWord, setLastWord] = useState<string | undefined>('')

  useEffect(() => {
    setLastWord(title.split(' ').pop())
  }, [title, titleRedMode])

  const cutLastWord = ((title: string) => {
    const array = title.split(' ')
    const arrayLength = array.length
    return array.slice(0, arrayLength - 1).join(' ')
  })

  return (
    <Wrapper align={align}>
      <HighlightBoxTypography>
        <HighlightTypography variant="h2">
          {titleRedMode ? cutLastWord(title) : title}
        </HighlightTypography>
        {titleRedMode &&
            <HighlightTypography variant="h2" sx={{ display: 'inline' }} color={mainTheme.palette.primary.main}>
              {' ' + lastWord}
            </HighlightTypography>
        }
      </HighlightBoxTypography>
    </Wrapper>
  )
}
