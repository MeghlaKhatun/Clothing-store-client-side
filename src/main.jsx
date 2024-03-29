import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Route';
import AuthProvider from './Provider/AuthProvider';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <AuthProvider>
      <HelmetProvider>
        <div>
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </AuthProvider>


  </React.StrictMode>,
)
