export interface IMenuPopover {
  title: string,
  menuList: IMenuItem[]
}

export interface IMenuItem {
  name: string,
  alias: string,
  icon: string,
}