import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../layout/MainLayout'
import { Home } from '../pages/home/Home'
import { About } from '../pages/about/About'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
    ],
  },
])
