import { Home, Login } from 'components'

import { AppRouteRecord } from './types'

export const routes: AppRouteRecord = {
  // Public routes
  loginRoute: {
    originalPath: '',
    path: '',
    element: <Home />,
    subRoutes: {
      profile: {
        path: '',
        element: <Login />,
      },
    },
  },
}

export default routes
