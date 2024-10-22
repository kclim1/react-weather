import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SearchBar from './components/SearchBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <SearchBar/>
  </StrictMode>,
)
