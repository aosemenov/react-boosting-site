import React from 'react'
import { useNavigate } from 'react-router-dom'
import { routesConfig } from '@app/routersConfig'

export const aliasToPath = (alias: string, hash?: string) => {
  const [_alias, id] = alias.split(':')
  const path = routesConfig?.find(v => v.alias === _alias)?.path
  if (!path) return ''
  return path.split(':')[0] + (id || '') + (hash ? `#${hash}` : '')
}

export const usePushToPage = (alias: string, hash?: string) => {
  const navigate = useNavigate()
  const url = aliasToPath(alias, hash)
  return () => navigate(url)
}

export const usePushToPath = (path: string | undefined) => {
  const navigate = useNavigate()
  return () => path && navigate(path)
}
