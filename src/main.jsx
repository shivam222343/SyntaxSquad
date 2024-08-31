import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/Home.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import PlanYourTrip from './components/PlanYourTrip.jsx'
import Budget from './components/Budget.jsx'
import Weather from './components/Weather.jsx'
import AddDestinations from './components/Adddestinations.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App style="duration-200" />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "Budget",
        element: <Budget />
      },
      {
        path: "PlanYourTrip",
        element: <PlanYourTrip />
      },
      {
        path: "Weather",
        element: <Weather />
      },
      {
        path: "AddDestinations",
        element: <AddDestinations />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
