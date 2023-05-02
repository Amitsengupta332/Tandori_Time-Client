import React from 'react';
import background from '../../../assets/istockphoto-1455323613-1024x1024.jpg'
import Chefs from '../../Chefs/Chefs/Chefs';

const Home = () => {
    return (
        <div className='mt-3'>
            <div className="flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${background})` }} >
                <div className="max-w-xl w-full px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white ">
                        The Best <br /> of Indian Food
                    </h1>
                    <p className="mt-4 sm:mt-6 lg:mt-8 text-xl sm:text-2xl lg:text-3xl font-medium text-white  ">Super Tasty Recipe</p>
                    <div className="mt-8 sm:mt-10 lg:mt-12 flex justify-center">
                        <button className="px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 font-medium rounded-2xl bg-blue-600 text-white hover:bg-blue-700 ">Order Now</button>
                    </div>
                </div>
            </div>
            <Chefs></Chefs>
        </div>
    );
};

export default Home;