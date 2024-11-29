import { useQuery } from '@tanstack/react-query';
import { useSupabase } from '@/contexts/SupabaseContext';
import { Verification } from '@/types/enums';

const useGetVerifications = () => {
  const { fetchVerifications } = useSupabase();

  const handleFetch = async () => {
    try {
      const data = await fetchVerifications?.();
      if (!data) {
        return [] as any;
      }

      return data;
    } catch (error: any) {
      console.log('verification eerror', error);
      return [] as any;
    }
  };

  const { data, refetch, isLoading } = useQuery<Verification[]>({
    queryKey: ['verifications'],
    queryFn: async () => await handleFetch(),
  });

  return { isLoading, data, refetch };
};

export default useGetVerifications;
