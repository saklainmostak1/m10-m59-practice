import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext()

const auth = getAuth(app)

const UseContext = ({children}) => {
    const[ user, setUser] = useState(null)
    const [loading , setLoading] = useState(true)

    const createUserAccount = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn =(email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
                setUser(currentUser)
                setLoading(false)
        })
        return () =>{
            unSubscribe()
        }
    }, [])

    const authInfo = {user, createUserAccount, logIn, logOut, loading}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UseContext;