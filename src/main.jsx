import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ServicesProvider } from './context/services'
ReactDOM.createRoot(document.getElementById('root')).render(
  <ServicesProvider>
      <App />
  </ServicesProvider> 
 )
