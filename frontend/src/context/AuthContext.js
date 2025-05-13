"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in (you can customize this endpoint)
    async function checkLoginStatus() {
      try {
        const res = await fetch("https://ai-language-tutor-backend.onrender.com/account/me", {
          credentials: "include"
        });

        if (res.ok) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      } catch (error) {
        setLoggedIn(false);
      }
    }

    checkLoginStatus();
  }, []);

  const login = () => setLoggedIn(true);
  const logout = async () => {
    await fetch("https://ai-language-tutor-backend.onrender.com/account/logout", {
      method: "POST",
      credentials: "include"
    });
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);