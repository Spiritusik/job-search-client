'use client'
import { UserContext } from "./UserContext";
import { useUserData } from "@/hooks/useUserData";

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useUserData();

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};