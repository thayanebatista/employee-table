import { useEffect } from 'react';
import { useEmployeeStore } from '../stores/employeeStore';

export function useEmployees() {
  const { employees, isLoading, error, fetchEmployees } = useEmployeeStore();

  useEffect(() => {
    fetchEmployees();
  }, []);

  return {
    data: employees,
    isLoading,
    error,
  };
}

export function useAddEmployee() {
  const addEmployee = useEmployeeStore((state) => state.addEmployee);
  return addEmployee;
}

export function useRemoveEmployee() {
  const removeEmployee = useEmployeeStore((state) => state.removeEmployee);
  return removeEmployee;
}

export function useUpdateEmployee() {
  const updateEmployee = useEmployeeStore((state) => state.updateEmployee);
  return updateEmployee;
}
