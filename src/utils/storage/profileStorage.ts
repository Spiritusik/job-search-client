import { ProfileData } from '@/types/profile';
import { getFromLocalStorage, setToLocalStorage } from '../localStorage';

const PROFILE_KEY = 'user-profile';

export function getProfile(): ProfileData | null {
  return getFromLocalStorage<ProfileData>(PROFILE_KEY);
}

export function setProfile(profile: ProfileData): void {
  setToLocalStorage(PROFILE_KEY, profile);
}

export function removeProfile(): void {
  localStorage.removeItem(PROFILE_KEY);
}