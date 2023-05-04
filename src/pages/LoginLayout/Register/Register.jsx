import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
// import { createLogger } from 'vite';
 

const Register = () => {
    // error handling 
    const [error, setError] = useState('')

    const [password, setPassword] = useState(null)
    const [passwordError, setPasswordError] = useState(null)
    const [email, setEmail] = useState(null)
    const [emailError, setEmailError] = useState(null)

    // use context 
    const {  user, createUser, loggedOut, setUpdateProfile  } = useContext(AuthContext)
    // handle form
    const handleRegister = event => {
        event.preventDefault();
        setError('')

        if (emailError) {
            event.target.email.focus();
        }
        else if (passwordError) {
            event.target.password.focus();
        }

        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoUrl, email, password);

        createUser(email, password)
        .then(result =>{
            const createUser = result.user;
            console.log(createUser);
        })
        .catch(error => {
            console.log(error);
        })
        
    }

    //  handle email
    const handelEmail = (event) => {
        const email = event.target.value
        setEmail(email)
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            setEmailError("Please! Provide a valid email")
        }
        else {
            setEmailError('')
        }
    }

    // handle password
    const handelPassword = (event) =>{
        const password = event.target.value;
        setPassword(password);

        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long");

        }
        else {
            setPasswordError("");
        }
    }




    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content  w-full flex-col ">
                    <div className="text-center  ">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photoUrl' placeholder="photoUrl" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onChange={handelEmail} type="email" name='email' placeholder="email" className="input input-bordered" required />
                                {emailError && <><span className='text-red-500'> {emailError}</span></>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input onChange={handelPassword} type="password" name='password' placeholder="password" className="input input-bordered" required />
                                {passwordError && <><span className='text-red-500'> {passwordError}</span></>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div>
                                <p className='text-center mt-3 text-red-500 mb-5' > {error} </p>
                            </div>
                        </form>
                        <p className='mb-4  text-center'>
                            Already Have An Account ?
                            <Link to="/login" className="link link-hover text-blue-500">
                                Please Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;