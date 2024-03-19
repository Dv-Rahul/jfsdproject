import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const login = (u) => {
        setUser(u);
    }
   
    
    return(
        <>
        <AuthContext.Provider value={{user,login  }}>{children}</AuthContext.Provider>
        </>
    )
}


export const useAuth = () => {
    return useContext(AuthContext);
   
}

