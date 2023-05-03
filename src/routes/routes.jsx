import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Shared/Home/Home';
import Blog from '../pages/Shared/Blog/Blog';
import Login from '../pages/LoginLayout/Login/Login';
import Main from '../Layout/Main/Main';
import Recipes from '../Layout/Recipes/Recipes';
import RecipeDetails from '../pages/Chefs/RecipeDetails/RecipeDetails';
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
    {
        path: '/',
        element: <Recipes></Recipes>,
        children: [
            {
                path: '/recipedetails/:id',
                element: <RecipeDetails />,
                loader: ({params}) => fetch(`http://localhost:5000/cheflist/${params.id}`)
                
            }
        ]
    }
]);


export default router;