import { MenuSubTitles } from '@widgets/menuDashboard/types/menuSubTitles'
import { MenuTitles } from '@widgets/menuDashboard/types/menuTitles'

export type TMenuGroup = {
  name: string
  groupItem: TMenuGroupItem[]
}

export type TMenuGroupItem = {
  title: MenuTitles
  subGroup: TMenuSubGroupItem[]
}

export type TMenuSubGroupItem = {
  title: MenuSubTitles
  path: string
}
