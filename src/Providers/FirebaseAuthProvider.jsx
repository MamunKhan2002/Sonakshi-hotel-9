import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import app from '../FireBase/FireBase.init';
import { createContext, useEffect, useState } from 'react';

const auth = getAuth(app);

export const AuthContext = createContext(null)

const FirebaseAuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const LoginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const Logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
            console.log(currenUser);

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

    const authInfo = { user, createUser, LoginUser, Logout };
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