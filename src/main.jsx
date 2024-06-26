import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router.jsx'
import HotelDataProvider from './Providers/HotelDataProvider.jsx'
import FirebaseAuthProvider from './Providers/FirebaseAuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseAuthProvider>
      <HotelDataProvider>
        <RouterProvider
          router={router}>
        </RouterProvider>
      </HotelDataProvider>
    </FirebaseAuthProvider>
  </React.StrictMode>,
)
