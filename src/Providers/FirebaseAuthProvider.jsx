import PropTypes from 'prop-types';
import {
    GithubAuthProvider,
    GoogleAuthProvider, createUserWithEmailAndPassword, getAuth,
    onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut
} from "firebase/auth"
import app from '../FireBase/FireBase.init';
import { createContext, useEffect, useState } from 'react';

const auth = getAuth(app);
export const AuthContext = createContext(null);

// Social Providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const FirebaseAuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const LoginUser = (email, password) => {
        // setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google Login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    // Github Login
    const GithubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }


    const Logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
            console.log(currenUser);
            setLoading(false)

            if (currenUser) {
                setUser(currenUser)
            }
            else {
                setUser(null)
            }
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = { user, loading, createUser, LoginUser, Logout, googleLogin, GithubLogin };
    return (
        <AuthContext.Provider
            value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

FirebaseAuthProvider.propTypes = {
    children: PropTypes.node
};

export default FirebaseAuthProvider;