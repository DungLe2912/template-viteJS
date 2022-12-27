import { Box, Button } from '@mui/material'

import { FallbackProps } from './interfaces'

const ErrorBoundaryFallback: React.FC<FallbackProps> = ({
  resetErrorBoundary,
}) => {
  return (
    <Box
      flex={1}
      p='1rem'
      height='100vh'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      Something went wrong
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </Box>
  )
}

export default ErrorBoundaryFallback
