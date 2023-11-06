import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './components/Routes/Routes.jsx'
import AuthProvider from './providers/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
<AuthProvider>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
</AuthProvider>
  </div>
)
