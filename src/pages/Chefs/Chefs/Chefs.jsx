import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefDetails from '../ChefDetails/ChefDetails';

const Chefs = () => {

    const chefList = useLoaderData();
    // console.log(chefList);
    return (
        <div>
            <h3 className='mt-10 mb-5 text-center text-4xl font-semibold'>Our Chef List </h3>
            <div className='grid grid-cols-1 lg:grid-cols-3  gap-4 mt-5 '>
                {chefList.map(chef =>
                    <ChefDetails
                        key={chef.id}
                        chef={chef}
                    >
                    </ChefDetails>)}
            </div>
        </div>
    );
};

export default Chefs;