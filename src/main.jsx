import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.jsx'
import { Main } from './components/Main.jsx'

import "./styles/main.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Hero/>
    <Main/>
  </StrictMode>,
)
