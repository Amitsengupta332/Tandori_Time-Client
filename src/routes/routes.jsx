import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Shared/Home/Home';
import Blog from '../pages/Shared/Blog/Blog';
import Login from '../pages/LoginLayout/Login/Login';
import Main from '../Layout/Main/Main';
import Recipes from '../Layout/Recipes/Recipes';
import RecipeDetails from '../pages/Chefs/RecipeDetails/RecipeDetails';
import Register from '../pages/LoginLayout/Register/Register';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import PrivateRoute from './PrivateRoute';
const router = createBrowserRouter([
    {
        path: "/",
        element:  <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: (() => fetch("http://localhost:5000/chefList"))
            },
            {
                path: '/blog',
                element: <PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/',
        element: <Recipes></Recipes>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/recipedetails/:id',
                element: <PrivateRoute><RecipeDetails /></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/cheflist/${params.id}`)
                
            }
        ]
    }
]);


export default router;