import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router/dom'
import Router from './router/Route.jsx'
import { UserProvider } from './utils/hooks/userContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={Router} />
    </UserProvider>
  </StrictMode>,
)
