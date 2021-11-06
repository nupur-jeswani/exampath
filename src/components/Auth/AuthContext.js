import React, { useContext, useState, useEffect } from 'react';
import { auth } from "../../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    onAuthStateChanged
} from "firebase/auth";

// import { setUpNav } from '../Navbar/setNav';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    };

    function logout() {
        return signOut();
    };

    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email);
    };

    function updateEmail(email) {
        return currentUser.updateEmail(email);
    };

    function updatePassword(email) {
        return currentUser.updatePassword(email);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);


    const value = {
        currentUser, 
        signup,
        login, 
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
