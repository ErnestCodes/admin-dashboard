'use client';

import { client } from '@/lib/supabaseClient';
import { ProviderProps } from '@/types/enums';
import { ClerkLoaded, useSession } from '@clerk/nextjs';
import { createContext, useContext, useEffect } from 'react';

export const VERIFICATIONS_TABLE = 'verifications';
export const PROFILES_TABLE = 'profiles';
export const USERS_TABLE = 'users';

const SupabaseContext = createContext<Partial<ProviderProps>>({});

export function useSupabase() {
  return useContext(SupabaseContext);
}

export const SupabaseProvider = ({ children }: any) => {
  const { session } = useSession();

  useEffect(() => {
    if (session) {
      setRealtimeAuth();
    }
  }, [session]);

  const setRealtimeAuth = async () => {
    try {
      const clerkToken = await session?.getToken({ template: 'supabase' });

      if (!clerkToken) {
        console.warn('Clerk token is undefined. Retrying...');
        return;
      }

      client.realtime.setAuth(clerkToken);
    } catch (error) {
      console.error('Error fetching Clerk token:', error);
    }
  };

  async function fetchUsers() {
    const { data, error } = await client.from(USERS_TABLE).select();

    if (error) {
      console.error(error.message);
      return [];
    }

    return data;
  }

  async function fetchVerifications() {
    const { data, error } = await client.from(VERIFICATIONS_TABLE).select();

    if (error) {
      console.error(error.message);
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
      return false;
    }

    return true;
  }

  async function updateUserRecord(user_id: string) {
    const { error } = await client
      .from(USERS_TABLE)
      .update({
        profile_moderated: true,
      })
      .eq('id', user_id);

    if (error) {
      console.error(error.message);
      return false;
    }

    return true;
  }

  const value = {
    fetchUsers,
    fetchVerifications,
    updateVerifications,
    updateUserRecord,
  };

  return (
    <ClerkLoaded>
      <SupabaseContext.Provider value={value}>
        {children}
      </SupabaseContext.Provider>
    </ClerkLoaded>
  );
};
