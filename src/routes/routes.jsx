import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
 
import App from '../App';
import Home from '../pages/Shared/Home/Home';
import Blog from '../pages/Shared/Blog/Blog';
import Login from '../pages/LoginLayout/Login/Login';
const router = createBrowserRouter([
    {
        path: "/",
        element:  <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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