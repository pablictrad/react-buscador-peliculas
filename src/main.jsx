import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BuscadorPeliculas } from './BuscadorPeliculas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BuscadorPeliculas/>
  </StrictMode>,
)
