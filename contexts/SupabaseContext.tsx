'use client';

import { client } from '@/lib/supabaseClient';
import { ProviderProps, User } from '@/types/enums';
import { useAuth } from '@clerk/nextjs';
import { createContext, useContext, useEffect } from 'react';
import toast from 'react-hot-toast';

export const VERIFICATIONS_TABLE = 'verifications';
export const PROFILES_TABLE = 'profiles';
export const USERS_TABLE = 'users';

const SupabaseContext = createContext<Partial<ProviderProps>>({});

export function useSupabase() {
  return useContext(SupabaseContext);
}

export const SupabaseProvider = ({ children }: any) => {
  const { userId } = useAuth();

  useEffect(() => {
    setRealtimeAuth();
  }, []);

  const setRealtimeAuth = async () => {
    const clerkToken = await window.Clerk?.session?.getToken({
      template: 'supabase',
    });

    client.realtime.setAuth(clerkToken!);
  };

  async function fetchUsers() {
    const { data, error } = await client.from(USERS_TABLE).select();

    if (error) {
      console.error(error.message);
      toast.error('Something went wrong');
      return [];
    }

    return data;
  }

  async function fetchVerifications() {
    const { data, error } = await client.from(VERIFICATIONS_TABLE).select();

    if (error) {
      console.error(error.message);
      toast.error('Something went wrong');
      return [];
    }

    return data;
  }

  async function updateVerifications(
    user_id: string,
    status: 'PENDING' | 'ACCEPTED' | 'REJECTED'
  ) {
    const { error } = await client
      .from(VERIFICATIONS_TABLE)
      .update({
        status,
        updated_at: new Date().toISOString(),
      })
      .eq('user_id', user_id);

    if (error) {
      console.error(error.message);
      toast.error('Something went wrong');
      return false;
    }

    return true;
  }

  const value = {
    fetchUsers,
    fetchVerifications,
    updateVerifications,
  };

  return (
    <SupabaseContext.Provider value={value}>
      {children}
    </SupabaseContext.Provider>
  );
};
