'use client';
import React, { useState, useEffect } from 'react';
import { ProfileData } from '@/types/profile';
import { setProfile as saveProfile, getProfile, removeProfile } from '@/utils/storage/profileStorage';
import { ProfileContext } from '.';

export const ProfileProvider = ({ children }: { children: React.ReactNode }) => {
  const [profile, setProfileState] = useState<ProfileData | null>(null);

  useEffect(() => {
    const stored = getProfile()
    if (stored) setProfileState(stored);
  }, []);

  const setProfile = (data: ProfileData) => {
    setProfileState(data);
    saveProfile(data);
  };

  const clearProfile = () => {
    setProfileState(null);
    removeProfile();
  };

  return (
    <ProfileContext.Provider value={{ profile, setProfile, clearProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};