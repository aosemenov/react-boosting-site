import { AuthGuard } from '@shared/guards/AuthGuard/ui/AuthGuard'
import React from 'react'


export const withAuthGuard = (Component: any) => (props: any) => (
  <AuthGuard>
    <Component {...props} />
  </AuthGuard>
)
