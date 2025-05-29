"use client"
import { useUserData } from "@/hooks/useUserData";
import { createContext } from "react";

export type UserContextType = ReturnType<typeof useUserData>;

export const UserContext = createContext<UserContextType | undefined>(undefined);