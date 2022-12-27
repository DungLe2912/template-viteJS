import { FC } from 'react'
import { Routes, Route } from 'react-router'

import routes from 'configs/routes'

const AppRoutesContainer: FC = () => {
  return (
    <Routes>
      <Route path='/'>
        {Object.values(routes).map(({ subRoutes = {}, ...route }) => (
          <Route key={route.originalPath} {...route}>
            {Object.values(subRoutes).map((subRoute) => (
              <Route key={subRoute.path} {...subRoute} />
            ))}
          </Route>
        ))}
      </Route>
    </Routes>
  )
}

export default AppRoutesContainer
