import React,{useContext} from "react";
import { PropertyType } from "../components/types";

const AuthContext = React.createContext('');

export function AuthProvider({children, value}:PropertyType){
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthValue():any{
    return useContext(AuthContext)
}


