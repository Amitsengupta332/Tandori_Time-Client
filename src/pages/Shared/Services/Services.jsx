import React from 'react';

const Services = () => {
    return (
        <div>
            <h3 className='mt-10 mb-5 text-center text-4xl font-semibold'>Our Services</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-5'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://img.freepik.com/free-vector/24-hour-everyday-service-sticker-design_1017-38078.jpg?w=740&t=st=1683208205~exp=1683208805~hmac=a0f8e855173384f883cb00e76315ad38e594b9fee2bc81e4fbb24289e7388b78" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            24/7 Services
                        </h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303525.jpg?w=740&t=st=1683208110~exp=1683208710~hmac=3efcce818d88302cf813e98283a7285155b5d0a26c6ddf8d768f610db3ded19d" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Online Order

                        </h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://img.freepik.com/free-vector/delivery-service-with-masks-concept_23-2148497067.jpg?w=740&t=st=1683207646~exp=1683208246~hmac=48e25cb9c58b706df64b01412b5c3f14c4a6eda75cfdc48a3734afc6efc8a95b" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Home Delivery
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;