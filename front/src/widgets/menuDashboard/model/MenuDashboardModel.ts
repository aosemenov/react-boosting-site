import { paths } from '@app/paths/paths'

import { MenuTitles } from '@widgets/menuDashboard/types/menuTitles'
import { TMenuItem } from '@widgets/menuDashboard/types/menuItemProps'
import { MenuSubTitles } from '@widgets/menuDashboard/types/menuSubTitles'
import { TMenuGroup } from '@widgets/menuDashboard/types/menuItemGroupProps'

export const menuItems = [
  {
    title: MenuTitles.NOTICE,
    path: paths.notice,
  },
] as TMenuItem[]

export const menuGroups = [
  {
    name: 'Противодействие ФТ',
    groupItem: [
      {
        title: MenuTitles.QUEUES,
        subGroup: [
          {
            title: MenuSubTitles.QUEUES_CHANGE,
            path: paths.queues.change,
          },
          {
            title: MenuSubTitles.QUEUES_AWAIT,
            path: paths.root,
          },
          {
            title: MenuSubTitles.QUEUES_ERROR,
            path: paths.queues.error,
          },
        ],
      },
      {
        title: MenuTitles.LISTS,
        subGroup: [
          {
            title: MenuSubTitles.LISTS_AWAIT,
            path: paths.lists.await,
          },
          {
            title: MenuSubTitles.LISTS_BLACK,
            path: paths.lists.black,
          },
          {
            title: MenuSubTitles.LISTS_LINKS,
            path: paths.lists.links,
          },
          {
            title: MenuSubTitles.LISTS_CLIENTS,
            path: paths.lists.clients,
          },
        ],
      },
      {
        title: MenuTitles.DOWNLOADED,
        subGroup: [
          {
            title: MenuSubTitles.DOWNLOADED_POD,
            path: paths.downloaded.pod,
          },
          {
            title: MenuSubTitles.DOWNLOADED_RFM,
            path: paths.downloaded.rfm,
          },
          {
            title: MenuSubTitles.DOWNLOADED_MVK,
            path: paths.downloaded.mvk,
          },
        ],
      },
    ],
  },
] as TMenuGroup[]
