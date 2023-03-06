import React, { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './app'
import { Login, ErrorPage } from './pages'
import './index.css'

const router = createBrowserRouter([
    { path: '/', element: <App />, errorElement: <ErrorPage /> },
    { path: '/login', element: <Login /> },
])

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
