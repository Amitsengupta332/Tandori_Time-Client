import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../../pages/Shared/Navigation/Navigation';
import Footer from '../../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className='container mx-auto mt-4'>
            <Navigation></Navigation>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Main;