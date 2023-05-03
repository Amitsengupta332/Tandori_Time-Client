import React from 'react';
import Navigation from '../../pages/Shared/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Shared/Footer/Footer';
import toast, { Toaster } from 'react-hot-toast';

const Recipes = () => {
    return (
        <div className='container mx-auto mt-4'>
            <Toaster />
            <Navigation></Navigation>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Recipes;