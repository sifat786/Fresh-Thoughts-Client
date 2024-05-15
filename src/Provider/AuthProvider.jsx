import axios from "axios";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from './../firebase/firebase.config';



export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    //! Create User:
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //! Login User:
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //! Google Login:
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    //! Update Profile:
    const updateUser = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
        });
    }

    //! Log Out:
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    //! Observer:
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('observer', currentUser);
            setLoading(false);

            //* if user exist then issue a token:
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            if(currentUser) {
                axios.post('https://fresh-thoughts-server.vercel.app/jwt', loggedUser, {withCredentials: true})
                .then(res => {
                    console.log(res.data);
                }).catch(err => console.log(err));
            } 
            else {
                axios.post('https://fresh-thoughts-server.vercel.app/logout', loggedUser, {withCredentials: true})
                .then(res => {
                    console.log(res.data);
                }).catch(err => console.log(err));
            }
        })
        return () => {
            unsubscribe();
        }
    },[user])

    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        loginUser,
        googleLogin,
        updateUser,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}