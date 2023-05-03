import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <div className="navbar bg-base-300">
                <div className="flex-1">
                    <Link to='/' className="normal-case text-xl">Tandoori Time</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li tabIndex={0}>
                            <Link to='/blog'>
                                Blog
                            </Link>
                        </li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/register'>Register</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navigation;