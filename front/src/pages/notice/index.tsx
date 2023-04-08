import React from 'react'

import { Box } from '@mui/material'

import { TypographyNoticeTitle } from '@shared/ui/components/TypographyNoticeTitle'
import { TypographyNoticeCount } from '@shared/ui/components/TypographyNoticeCount'
import { useDocumentTitle } from '@shared/hooks/useDocumentTitle'

import { Header } from '@widgets/header'
import { Body } from '@widgets/bodyContent'
import { Notices } from '@widgets/noticesBlock'

export const NoticePage = () => {
  useDocumentTitle('Уведомления')

  return (
    <>
      <Header padding="24px 28px 20px" height="86px">
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TypographyNoticeTitle variant="h1" sx={{ mr: '16px' }}>
            Уведомления
          </TypographyNoticeTitle>
          <TypographyNoticeCount variant="h2">40</TypographyNoticeCount>
        </Box>
      </Header>
      <Body>
        <Notices />
      </Body>
    </>
  )
}
