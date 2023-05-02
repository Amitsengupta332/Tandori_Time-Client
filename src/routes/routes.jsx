import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Shared/Home/Home';
import Blog from '../pages/Shared/Blog/Blog';
import Login from '../pages/LoginLayout/Login/Login';
import Main from '../Layout/Main/Main';
const router = createBrowserRouter([
    {
        path: "/",
        element:  <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: (() => fetch("http://localhost:5000/chefList"))
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
]);


export default router;