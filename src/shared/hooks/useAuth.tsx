import { useAppSelector } from '@shared/hooks/store'
import { paths } from '@app/paths/paths'

export function useAuthLink(path: string) {
  const { isAuthorized } = useAppSelector(state => state.auth)

  const link = isAuthorized ? path : paths.clientArea.dashboard.auth

  return {
    link,
  }
}
