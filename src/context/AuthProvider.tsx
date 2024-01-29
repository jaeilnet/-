"use client";

import { AuthContextPayload } from "@/types/context";
import { ReactNode, createContext, useState } from "react";

export const AuthContext = createContext({
  isLogin: false,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const handleIsLogin = () => setIsLogin(!isLogin);

  const payload: AuthContextPayload = {
    isLogin,
    handleIsLogin,
  };

  return (
    <AuthContext.Provider value={payload}>{children}</AuthContext.Provider>
  );
};
