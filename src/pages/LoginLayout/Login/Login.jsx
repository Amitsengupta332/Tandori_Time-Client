import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaGithub, FaGoogle } from "react-icons/fa";


const Login = () => {
    const [error, setError] = useState('')
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const [passwordError, setPasswordError] = useState(null)
    const [emailError, setEmailError] = useState(null)

    const navigate = useNavigate()
    const location = useLocation()
    console.log('login page location', location);

    const from = location.state?.from?.pathname || "/";
    console.log(from)

    const { logInUser, setLoading, googleSignIn, githubSignIn } = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault()
        setError('')


        logInUser(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                navigate(from, { replace: true })
                event.target.reset()
                setError('')
                setLoading(false)

            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })
            .finally(() => {
                setLoading(false)

            })
    }

    const handleEmail = (event) => {
        const email = event.target.value
        setEmail(email)
    }

    const handlePassword = (event) => {
        const password = event.target.value
        setPassword(password)
    }


    // google 
    const handelGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                navigate(from, { replace: true })
                console.log(result.user)

            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handelGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                navigate(from, { replace: true })
                console.log(result.user)

            })
            .catch(error => {
                console.log(error.message)
            })
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
                                    <input onChange={handleEmail} type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input onChange={handlePassword} type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                {/* <p className='text-center mt-3 text-red-500  ' > {error} </p> */}
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
                                        <Link onClick={handelGoogleSignIn} >
                                            <div className='flex justify-center items-center gap-2'>
                                                <FaGoogle className='w-5 h-5'></FaGoogle>
                                                Google Sign In
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="divider divider-horizontal">OR</div>
                                    <div className=" flex-grow card rounded-box place-items-center ">
                                        <Link onClick={handelGithubSignIn}>
                                            <div className='flex justify-center items-center gap-2'>
                                                <FaGithub className='w-5 h-5'></FaGithub>
                                                Github Sign In
                                            </div>
                                        </Link>
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