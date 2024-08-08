import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Contact from './routes/Contact.tsx'
import Root from './routes/Root.tsx'
import './index.css'

const router = createHashRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/contacts/:contactId',
                element: <Contact />,
            },
            {
                path: '/',
                element: <h1>Select a Contact</h1>,
            },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
