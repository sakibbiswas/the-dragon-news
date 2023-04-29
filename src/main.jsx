import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main.jsx';
import Home from './pages/Home/Home.jsx';
import Category from './pages/Home/category/Category';
import Newlayout from './components/Layout/Newlayout';
import News from './pages/Home/news/news/News';
import Authprovider from './providers/Authprovider';
import Loginlayout from './components/Layout/Loginlayout';
import Login from './pages/login/Login/Login';
import Register from './pages/login/Register/Register';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/category/0'></Navigate>
  },
  {
    path: '/',
    element: <Loginlayout></Loginlayout>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ]
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
      {
        path: ':id',
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
        element: <News></News>,
        loader: ({ params }) => fetch(`http://localhost:4000/news/${params.id}`)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>  <RouterProvider router={router} /></Authprovider>
  </React.StrictMode>,
)
