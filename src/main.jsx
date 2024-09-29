import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom'
import AppState from './useContext/AppState.jsx'
// import 'font-awesome/css/font-awesome.min.css';
import 'boxicons'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AppState>
    <App />
    </AppState>
    </BrowserRouter>
  </StrictMode>,
)
