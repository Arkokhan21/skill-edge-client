import React, { createContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../firebase/firebase.config'

export const AuthContext = createContext()

const auth = getAuth(app);

const Authprovider = ({ children }) => {

    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
            }
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = { user, createUser, signInUser }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;