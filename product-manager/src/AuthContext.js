import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (token) {
            const decoded = jwtDecode(token);
            setUser(decoded);
        }
    }, [token]);

    const login = async (email, password) => {
        try {
            const response = await axios.post("http://localhost:5000/connect/token", new URLSearchParams({
                client_id: "client",
                client_secret: "secret",
                grant_type: "password",
                username: email,
                password: password,
                scope: "api1"
            }), {
                headers: { "Content-Type": "application/x-www-form-urlencoded" }
            });

            setToken(response.data.access_token);
            localStorage.setItem("token", response.data.access_token);

            const decoded = jwtDecode(response.data.access_token);
            setUser(decoded);
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    const logout = () => {
        setToken("");
        setUser(null);
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ token, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
