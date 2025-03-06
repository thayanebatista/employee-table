import { useQuery } from '@tanstack/react-query';
import apiService from '../services/api.service';

export function useApi() {
  const fetchData = async <T>(endpoint: string): Promise<T> => {
    return await apiService.get<T>(endpoint);
  };

  const useGetData = <T>(endpoint: string, queryKey?: string[]) => {
    const query = useQuery<T>({
      queryKey: queryKey || [endpoint],
      queryFn: () => fetchData<T>(endpoint),
    });

    return {
      data: query.data,
      isLoading: query.isLoading,
      error: query.error,
    };
  };

  return { useGetData };
}
