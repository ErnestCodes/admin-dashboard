import { useQuery } from '@tanstack/react-query';
import { useSupabase } from '@/contexts/SupabaseContext';
import { User } from '@/types/enums';

const useGetUsers = () => {
  const { fetchUsers } = useSupabase();

  const handleFetch = async () => {
    try {
      const data = await fetchUsers?.();
      if (!data) {
        return [] as any;
      }

      return data;
    } catch (error: any) {
      console.log(error);
      return [] as any;
    }
  };

  const { data, refetch, isLoading } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: async () => await handleFetch(),
    staleTime: 0,
    refetchOnWindowFocus: true,
  });

  return { isLoading, data, refetch };
};

export default useGetUsers;
