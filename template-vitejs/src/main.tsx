import { StrictMode } from 'react'
import { render } from 'react-dom'

import App from './App'

import 'react-toastify/dist/ReactToastify.min.css'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
)
