import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import AppProvider from './hooks'
import Pages from './routes/routes'
import GlobalStyles from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <Pages />
    </AppProvider>
    <GlobalStyles />
    <ToastContainer theme="colored" autoClose={2000} />
  </React.StrictMode>
)
