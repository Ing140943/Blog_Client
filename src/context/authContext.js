import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext()

export const AuthContexProvider = ({children}) => {
    // convert string to JSON
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

    const login = async (inputs)=> {
        const res = await axios.post(`${process.env.REACT_APP_SERVICES_PATH}/auth/login`, inputs);
        setCurrentUser(res.data)
    }

    const logout = async (inputs)  => {
        await axios.post(`${process.env.REACT_APP_SERVICES_PATH}/auth/logout`);
        setCurrentUser(null)
    }

    useEffect(() => {
        // Transform JSON to string
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser])
    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}