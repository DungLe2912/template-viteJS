import { Box, CircularProgress } from '@mui/material'

import { LoadingBoxProps } from './interfaces'

const LoadingBox: React.FC<LoadingBoxProps> = ({
  indicatorSize = 24,
  ...props
}) => (
  <Box
    flex={1}
    display='flex'
    minHeight='480px'
    alignItems='center'
    justifyContent='center'
    {...props}
  >
    <CircularProgress size={indicatorSize} />
  </Box>
)

export default LoadingBox
