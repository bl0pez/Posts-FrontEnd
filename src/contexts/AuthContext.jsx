import { createContext, useState } from "react";
import { useAuth } from "../hooks/useAuth";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    

    const { status, user, errorMessage, checkAuthToken, startLogin, startoagout} = useAuth();

    return(
        <AuthContext.Provider 
            value={{
                status,
                user,
                errorMessage,
                checkAuthToken,
                startLogin,
                startoagout,
            }}>
            {children}
        </AuthContext.Provider>
    )

};

export default AuthContext;