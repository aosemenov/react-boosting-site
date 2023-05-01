import { IMenuPopover } from '@widgets/menu/types/types'

export const menuItemPopoverModel = [
  {
    title: 'Boosting',
    menuList: [{
      icon: 'csgo',
      name: 'CS:GO',
      alias: 'csgoboosting',
    },
      {
        icon: 'valorant',
        name: 'VALORANT',
        alias: 'valorantboosting',
      },
    ],
  },
  {
    title: 'Accounts',
    menuList: [{
      icon: 'csgo',
      name: 'CS:GO',
      alias: 'csgoaccounts',
    },
      {
        icon: 'valorant',
        name: 'VALORANT',
        alias: 'valorantaccounts',
      },
    ],
  },
] as IMenuPopover[]
