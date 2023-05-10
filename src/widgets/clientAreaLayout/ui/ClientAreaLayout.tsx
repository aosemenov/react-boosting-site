import React from 'react'

import { useDocumentTitle } from '@shared/hooks/useDocumentTitle'

interface ILayout {
  MainBlock: () => JSX.Element
  alias: string,
  title: string,
}

export const ClientAreaLayout = ({ MainBlock, alias, title }: ILayout): JSX.Element => {
  useDocumentTitle(title)

  return (
    <MainBlock/>
  )
}
