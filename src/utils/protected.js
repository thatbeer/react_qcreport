import React, { useEffect } from 'react'
import { Navigate , useNavigate } from 'react-router-dom';
import { useAuth } from '../store/Auth'

const Protected = ({children}) => {
    const auth = useAuth();
    const navigate = useNavigate();


    useEffect( () => {
        if (!auth) {
            navigate("/auth")
        }
    })

    if (!auth.user) {
        return <Navigate to="/auth" />
    }


  return {children}
}

export default Protected;