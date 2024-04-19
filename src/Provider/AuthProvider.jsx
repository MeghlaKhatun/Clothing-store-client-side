import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext=createContext(null)
const auth = getAuth(app);
import PropTypes from 'prop-types';

const AuthProvider = ({children}) => {
    // const [user,setUser]=useState(null)
    const [isLoading,setIsLoading]=useState(true);

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

    const Info={
        // user,
        isLoading,
        createUser,
        signIn
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