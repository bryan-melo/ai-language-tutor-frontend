// context/AuthContext.js
"use client";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuth = async () => {
    try {
      const res = await fetch("https://ai-language-tutor-backend.onrender.com/account/auth/check", {
        credentials: "include",
      });
      if (!res.ok) throw new Error();
      setIsAuthenticated(true);
    } catch {
      setIsAuthenticated(false);
    }
  };

  const login = () => setIsAuthenticated(true);
  const logout = async () => {
    try {
      const res = await fetch("https://ai-language-tutor-backend.onrender.com/account/logout", {
        method: "POST",
        credentials: "include", // important to send cookies
      });
  
      if (res.ok) {
        setIsAuthenticated(false);
      } else {
        console.error("Logout failed");
      }
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);