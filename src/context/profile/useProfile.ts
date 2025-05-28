import { useContext } from "react";
import { ProfileContext, ProfileContextValue } from "./ProfileContext";

export const useProfile = (): ProfileContextValue => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
