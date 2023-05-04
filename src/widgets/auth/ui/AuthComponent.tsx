import React, { FC } from 'react'

import styled from '@mui/material/styles/styled'

import { Box, BoxProps } from '@mui/material'

const Wrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}))

export const AuthComponent: FC<{}> = () => {
  // Логика формы авторизации страницы...

  return (
    <Wrapper>
      Форма авторизации
      Форма регистрации
    </Wrapper>
  )
}
