import { Employee } from 'stores/employeeStore';
import { useQuery } from '@tanstack/react-query';

import apiService from '../services/api.service';

export function useEmployees() {
  return useQuery<Employee[]>({
    queryKey: ['employees'],
    queryFn: async () => {
      const response = await apiService.get<Employee[]>('/employees');
      return response;
    },
  });
}
