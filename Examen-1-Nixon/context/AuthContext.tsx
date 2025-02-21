import React, { createContext, useState, useContext } from "react";
import { useRouter } from "expo-router";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const login = (email) => {
    if (email.endsWith("@gmail.com")) {
      setUser(email);
      router.replace("/tabs/home");
    } else {
      alert("Solo se permite acceso con correos @gmail.com");
    }
  };

  const logout = () => {
    setUser(null);
    router.replace("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
