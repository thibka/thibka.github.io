import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './custom-scrollbar.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
