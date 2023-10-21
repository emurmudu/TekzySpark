import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loggedInUserEmail, setLoggedInUserEmail] = useState(null);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // const signInWithUser = (email, password) => {
    //     setLoading(true);
    //     return signInWithEmailAndPassword(auth, email, password)
    // }

    const signInWithUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setLoggedInUserEmail(result.user.email);
                return result;
            });
    }


    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .then((result) => {
                setLoggedInUserEmail(result.user.email);
                return result;
            });
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('logged in users', currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = { user, createUser, signInWithUser, signInWithGoogle, loading, logOut, loggedInUserEmail }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;