'use client'
import { ProfileData } from '@/types/profile';
import { createContext } from 'react';

export interface ProfileContextValue {
  profile: ProfileData | null;
  setProfile: (data: ProfileData) => void;
  clearProfile: () => void;
}

export const ProfileContext = createContext<ProfileContextValue | undefined>(undefined);
