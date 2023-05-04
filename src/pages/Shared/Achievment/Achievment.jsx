import React from 'react';
import { HiStar } from "react-icons/hi2";

const Achievment = () => {
    return (
        <div>
            <h3 className='mt-10 mb-5 text-center text-4xl font-semibold'>Our Achievement</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-5'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://img.freepik.com/free-vector/realistic-illustration-golden-goblet-medal-with-red-ribbon-isolated-background_1441-1888.jpg?w=740&t=st=1683185602~exp=1683186202~hmac=082c80357eacfd573fbb13f4f11fb104be83ebcf515c4c0a88b4450195fc8f12" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Michelin Star
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://img.freepik.com/free-vector/menu-beige-background_24908-61049.jpg?w=740&t=st=1683183971~exp=1683184571~hmac=fabd51e2828a2b41811640b76aad2bdb5fe8121614fa0a501d848c8a344fb7c8" alt="Shoes" /></figure>
                    {/* <figure><HiStar className='w-40 h-40 text-yellow-500'></HiStar></figure> */}
                    <div className="card-body">
                        <h2 className="card-title">
                            National Restaurant Award
                            {/* <div className="badge badge-secondary">NEW</div> */}
                        </h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='pt-5 py-5' src="https://findlogovector.com/wp-content/uploads/2018/08/green-restaurant-certified-logo-vector.png" alt="Shoes" /></figure>
                    {/* <figure><HiStar className='w-40 h-40 text-yellow-500'></HiStar></figure> */}
                    <div className="card-body">
                        <h2 className="card-title">
                            Sustainable Restaurant Certification
                            {/* <div className="badge badge-secondary">NEW</div> */}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievment;