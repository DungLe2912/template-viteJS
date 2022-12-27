import { PathRouteProps } from 'react-router'

interface AppRouteProps extends PathRouteProps {
  path: string
  label?: string
  originalPath?: string
  subRoutes?: AppRouteRecord
}

export type AppRouteRecord = Record<string, AppRouteProps>
