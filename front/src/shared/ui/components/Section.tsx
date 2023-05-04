import React, { FC } from 'react'

import styled from '@mui/material/styles/styled'
import { Box, BoxProps } from '@mui/material'

import { SectionTitle } from '@shared/ui/components/SectionTitle'
import { Container } from '@shared/ui/components/Container'

const Wrapper = styled(Box)<BoxProps>(({ theme }) => ({
  padding: '60px 0',
  '.section__header': {
    marginBottom: '40px',
    [theme.breakpoints.up('sm')]: {
      marginBottom: '80px',
    },
  }
}))

type TSectionProps = {
  title?: string
  titleAlign?: 'start' | 'center' | 'end'
  titleRedMode?: boolean
  wide?: boolean
}

export const Section: FC<TSectionProps> = ({ wide, title, titleAlign, titleRedMode = false, children }) => {
  return (
    <Wrapper>
      {title && (
        <Container>
          <Box className="section__header">
            <SectionTitle align={titleAlign} title={title} titleRedMode={titleRedMode}/>
          </Box>
        </Container>
      )}
      {!wide ?
        <Container>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {children}
          </Box>
        </Container>
        :
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {children}
        </Box>
      }
    </Wrapper>
  )
}
