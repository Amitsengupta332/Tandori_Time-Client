import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)

const auth = getAuth(app)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = () => {
        
        return signInWithPopup(auth, googleProvider)
    }
    const githubSignIn = () => {

        return signInWithPopup(auth, githubProvider)
    }
    const loggedOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const setUpdateProfile = (user, name, url) => {
        setLoading(true)
        return updateProfile(user, {
            displayName: name,
            photoURL: url
        })
    }

    const authInfo = {
        user, createUser, logInUser, loggedOut, loading, setLoading, setUpdateProfile, googleSignIn, githubSignIn,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {

            setUser(loggedUser)
            setLoading(false)
            // console.log(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;