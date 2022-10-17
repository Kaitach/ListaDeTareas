import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {TareasContenidoProvider} from './context/ContenidoDeTarjetas'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <TareasContenidoProvider>      
    <App />
    </TareasContenidoProvider>

  </React.StrictMode>
)
