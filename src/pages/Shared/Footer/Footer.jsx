import React from 'react';

const Footer = () => {
    return (
        <div className='sm:text-center mt-8'>
            <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
                    <span className="footer-title font-bold text-3xl text-white">Tandoori Time</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    {/* <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a> */}
                </div>
                <div>
                    <span className="footer-title font-bold text-3xl text-white">Services</span>
                    <a className="link link-hover">24/7 opening</a>
                    <a className="link link-hover">Online ordering</a>
                    <a className="link link-hover">Home Delivery</a>
                    {/* <a className="link link-hover">Advertisement</a> */}
                </div>
                
                <div>
                    <span className="footer-title font-bold text-3xl text-white">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;