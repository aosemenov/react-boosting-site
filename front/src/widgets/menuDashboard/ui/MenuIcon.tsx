import React, { FC } from 'react'

import { ListsMenuIcon } from '@shared/ui/icons/ListsMenuIcon'
import { QueueMenuIcon } from '@shared/ui/icons/QueueMenuIcon'
import { AttentionMenuIcon } from '@shared/ui/icons/AttentionMenuIcon'
import { NoticeMenuIcon } from '@shared/ui/icons/NoticeMenuIcon'

import { mainTheme } from '@app/styles/mainTheme'

import { MenuTitles } from '@widgets/menuDashboard/types/menuTitles'

export const MenuIcon: FC<{ objectType: MenuTitles }> = ({ objectType }) => {
  switch (objectType) {
    case MenuTitles.NOTICE:
      return <NoticeMenuIcon svgColor={mainTheme.palette.common.white} />
    case MenuTitles.QUEUES:
      return <QueueMenuIcon svgColor={mainTheme.palette.common.white} />
    case MenuTitles.LISTS:
      return <ListsMenuIcon svgColor={mainTheme.palette.common.white} />
    case MenuTitles.DOWNLOADED:
      return <AttentionMenuIcon svgColor={mainTheme.palette.common.white} />
    default:
      return null
  }
}
