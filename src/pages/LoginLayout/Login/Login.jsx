import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';


const Login = () => {
    const [error, setError] = useState('')
    const { signIn, setLoading } = useContext(AuthContext)

    const handleLogin= event => {
        e.preventDefault()
        setError('')

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
    }
    return (
        <div>
            <div>
                <div className="hero  bg-base-200">
                    <div className="hero-content  w-full flex-col ">
                        <div className="text-center  ">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                        </div>
                        <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <p className='text-center mt-3 text-red-500  ' > {error} </p>
                            </form>
                            <p className='mb-4  text-center'>
                                Don't Have An Account?
                                <Link to="/register" className="link link-hover text-blue-600">
                                    Please Register
                                </Link>
                            </p>
                            <div>
                                <div className="flex h-20 w-full ">
                                    <div className="   flex-grow card rounded-box place-items-center ">
                                        <Link  > Google Sign In</Link>
                                    </div>
                                    <div className="divider divider-horizontal">OR</div>
                                    <div className=" flex-grow card rounded-box place-items-center ">
                                        <Link> Github Sign In</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;