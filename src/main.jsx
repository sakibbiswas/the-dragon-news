import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main.jsx';
import Home from './pages/Home/Home.jsx';
import Category from './pages/Home/category/Category';
import Newlayout from './components/Layout/Newlayout';
import News from './pages/Home/news/news/News';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/category/:id',
        element: <Category></Category>,
        loader: ({ params }) => fetch(`http://localhost:4000/Categories/${params.id}`)
      },
    ]
  },
  {
    path: '/news',
    element: <Newlayout></Newlayout>,
    children: [
      {
        path: '/news/:id',
        element: <News></News>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
