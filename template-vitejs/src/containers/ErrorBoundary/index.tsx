import * as Sentry from '@sentry/react'

import Fallback from './components/Fallback'

const ErrorBoundary: React.FC = ({ children }) => {
  return (
    <Sentry.ErrorBoundary
      fallback={() => (
        <Fallback resetErrorBoundary={() => window.location.reload()} />
      )}
    >
      {children}
    </Sentry.ErrorBoundary>
  )
}

export default ErrorBoundary
