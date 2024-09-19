import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SabaletasMemorial from './SabaletasMemorial'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SabaletasMemorial />
  </StrictMode>,
)
