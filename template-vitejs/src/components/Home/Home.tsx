import { Box, BoxProps } from '@mui/material'
import { Outlet } from 'react-router'

const Home: React.FC<BoxProps> = (props) => {
  return (
    <Box {...props}>
      <Outlet />
    </Box>
  )
}

export default Home
