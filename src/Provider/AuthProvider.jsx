import { createContext, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext=createContext(null)
const auth = getAuth(app);
import PropTypes from 'prop-types';

const AuthProvider = ({children}) => {
    // const [user,setUser]=useState(null)
    const [isLoading,setIsLoading]=useState(true);
    const provider=new GoogleAuthProvider();

    //create user
    const createUser=(email,password)=>{
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //login user
    const signIn=(email, password)=>{
        setIsLoading(true);
        return signInWithEmailAndPassword(auth,email, password)
    }

    //google login
    const googleSignIn=()=>{
        setIsLoading(true);
        return signInWithPopup(auth,provider)
    }

    const Info={
        // user,
        isLoading,
        createUser,
        signIn,
        googleSignIn,
    }

    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node,
};

export default AuthProvider;