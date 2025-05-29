import { userApi } from "@/lib/api/userApi";
import { JwtPayload } from "jwt-decode";
import useSWR from "swr";

export function useUserData() {
  const { data, error, isLoading, mutate } = useSWR<JwtPayload | null>("user", async () => {
    try {
      return await userApi.check();
    } catch {
      return null;
    }
  });

  const login = async (email: string, password: string) => {
    const user = await userApi.login(email, password);
    mutate(user);
    return user;
  };

  
  const register = async (email: string, password: string, role = ['USER']) => {
    const user = await userApi.registration(email, password, role);
    mutate(user);
    return user;
  };

  const refetch = () => mutate();
  const logout = async () => {
    await userApi.logout();
    mutate(null);
  };

  return {
    user: data ?? null,
    isLoading,
    isError: Boolean(error),
    register,
    refetch,
    logout,
    login,
  };
}