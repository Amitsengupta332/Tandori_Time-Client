import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';


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

        // const form = event.target;
        // const email = form.email.value;
        // const password = form.password.value;
        // console.log(email, password);
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
    
    const handelEmailField = (e) => {
        const email = e.target.value
        setEmail(email)
    }

    const handelPasswordField = (e) => {
        const password = e.target.value
        setPassword(password)
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
                                    <input onChange={handelEmailField} type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input onChange={handelPasswordField} type="password" name='password' placeholder="password" className="input input-bordered" required />
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