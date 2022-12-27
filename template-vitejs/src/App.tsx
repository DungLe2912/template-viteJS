import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { MemoryRouter } from 'react-router-dom'

import queryClient from 'apis/utils/queryClient'
import theme from 'configs/theme'

import { AppRoutesContainer, ErrorBoundary, ToastContainer } from './containers'

function App() {
  return (
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <ErrorBoundary>
            <AppRoutesContainer />
          </ErrorBoundary>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
        <ToastContainer />
      </ThemeProvider>
    </MemoryRouter>
  )
}

export default App
