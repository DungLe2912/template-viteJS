import { ComponentType, Suspense } from 'react'

import { LoadingBox } from 'components'

export default function withSuspense<T>(
  WrappedComponent: ComponentType<T>,
  defaultFallback = <LoadingBox width='100%' height='100%' />,
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component'

  const ComponentWithSuspense = (props: T) => {
    return (
      <Suspense fallback={defaultFallback}>
        <WrappedComponent {...props} />
      </Suspense>
    )
  }

  ComponentWithSuspense.displayName = `withSuspense(${displayName})`

  return ComponentWithSuspense
}
