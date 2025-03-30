import React, { createContext } from 'react';
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const createUser = (email,password) 
    const userInfo = {


    }
    return (
        <AuthContext value={userInfo}>{children}</AuthContext>
    )
   
};

export default AuthProvider;