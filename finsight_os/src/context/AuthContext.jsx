import { createContext, useContext, useEffect, useState } from "react";

import { loginUser, registerUser } from "../api/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    // ---------------- Restore User ----------------

    useEffect(() => {

        const savedUser = localStorage.getItem("user");

        if (savedUser) {

            setUser(JSON.parse(savedUser));

        }

        setLoading(false);

    }, []);

    // ---------------- Login ----------------

    const login = async (loginData) => {

        const response = await loginUser(loginData);

        if (response.success) {

            localStorage.setItem(

                "user",

                JSON.stringify(response)

            );

            setUser(response);

        }

        return response;

    };

    // ---------------- Register ----------------

    const register = async (registerData) => {

        const response = await registerUser(registerData);

        return response;

    };

    // ---------------- Logout ----------------

    const logout = () => {

        localStorage.removeItem("user");

        setUser(null);

    };

    return (

        <AuthContext.Provider

            value={{

                user,

                login,

                register,

                logout,

                loading

            }}

        >

            {children}

        </AuthContext.Provider>

    );

};

export const useAuth = () => useContext(AuthContext);