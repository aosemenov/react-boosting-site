import { MenuTitles } from '@widgets/menuDashboard/types/menuTitles'

export type TMenuItemProps = {
  item: TMenuItem
}

export type TMenuItem = {
  title: MenuTitles
  path: string
}
