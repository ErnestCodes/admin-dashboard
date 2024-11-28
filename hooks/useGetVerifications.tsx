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
      console.log(error);
      return [] as any;
    }
  };

  const { data, refetch, isLoading } = useQuery<Verification[]>({
    queryKey: ['verifications'],
    queryFn: async () => await handleFetch(),
    staleTime: 0,
    refetchOnWindowFocus: true,
  });

  return { isLoading, data, refetch };
};

export default useGetVerifications;
