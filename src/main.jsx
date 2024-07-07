import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Course  from '/src/pages/Course.jsx'
import Blog  from '/src/pages/Blog.jsx'
import Contact  from '/src/pages/Contact.jsx'
import Mainpart  from '/src/pages/Mainpart.jsx'
import About  from '/src/pages/About.jsx'
import Notfoundpage  from '/src/pages/Notfoundpage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Notfoundpage />,
    children: [
      {path: "/",element: <Mainpart />},
      {path: "/contact",element: <Contact />},
      {path: "/course",element: <Course />},
      {path: "/about",element: <About />},
      {path: "/blog",element: <Blog/> },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
