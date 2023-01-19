import React , { useState , createContext, useContext } from 'react'


const AuthContext = createContext(null);


export const AuthProvider = ({children}) => {
    const [ user , setUser ] = useState(() => {
        let userProfile = localStorage.getItem("user");
        if (userProfile) {
            return JSON.parse(userProfile);
        }
        return null;
    });

    
    const login = async (credential) => {
        return fetch('https://www.mecallapi.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credential)
        }).then(data => data.json()).then(result => {
            setUser(result);
            localStorage.setItem('token',result['accessToken']);
        })
    }

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUser(null);
        
    }


  return (
    <AuthContext.Provider value={{user , setUser , login , logout }}>
        {children}
    </AuthContext.Provider> 
  )
};

export default AuthContext