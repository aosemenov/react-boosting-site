import { paths } from '@app/paths/paths'

export const items = [
  {
    title: 'Overview',
    path: paths.clientArea.dashboard.overview,
    iconType: 'overview',
    disabled: false,
    external: false,
  },
  {
    title: 'Orders',
    path: paths.clientArea.dashboard.orders,
    iconType: 'orders',
    disabled: false,
    external: false,
  },
  {
    title: 'Settings',
    path: paths.clientArea.dashboard.settings,
    iconType: 'settings',
    disabled: true,
    external: false,
  },
]
