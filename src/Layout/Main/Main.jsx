import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../../pages/Shared/Navigation/Navigation';
import Footer from '../../pages/Shared/Footer/Footer';
import toast, { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div className='container mx-auto mt-4'>
            <Toaster />
            <Navigation></Navigation>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Main;