import { lazy } from 'react'

import withSuspense from 'hocs/withSuspense'

const Home = lazy(() => import('./Home'))
export default withSuspense(Home)
