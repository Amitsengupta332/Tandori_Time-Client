import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../../pages/Shared/Navigation/Navigation';

const Main = () => {
    return (
        <div className='container mx-auto mt-4'>
            <Navigation></Navigation>
            <Outlet />
        </div>
    );
};

export default Main;