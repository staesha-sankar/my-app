import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


//import default
import App from './App.jsx'


//Raect - strict mode - runs component twice
//First run ouput == second ru out
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
