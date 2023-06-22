import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Navigation = () => {
    const { user, loggedOut, loading } = useContext(AuthContext) || {}

    const location = useLocation()
    const handleLogOut = () => {
        loggedOut()
            .then(() => {

            })
            .catch(err => {
                toast.error(err.message)
            })
    }
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


                        {
                            !user && !loading &&
                            <>
                                <li><Link to='/login'>Login</Link></li>
                                <label tabIndex={0} className="btn btn-circle avatar">
                                    <div className=" w-12 h-12 rounded-full">
                                        <img src="https://i.ibb.co/3YZNVgN/pro.png" className="w-full h-full rounded-full" alt="User Avatar" />

                                    </div>
                                </label>
                            </>
                        }


                        {
                            user && !loading && <>
                               <li><Link onClick={handleLogOut} to='/login'> LogOut </Link></li> 
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className=" w-12 h-12 rounded-full">
                                        {
                                            user.photoURL == null && <img src="https://i.ibb.co/3YZNVgN/pro.png" className="w-full h-full rounded-full" alt="User Avatar" />
                                        }
                                        {user.photoURL && <img src={user.photoURL} className="w-full h-full rounded-full" alt="User Avatar" />}
                                    </div>
                                </label>
                            </>
                        }

                        {/* <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/register'>Register</Link></li> */}
                    </ul>
                    <div>
                        <div>
                            {
                                !user || loading && <>

                                    <button className="btn loading">loading</button>

                                </>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navigation;