import { useState, useMemo } from 'react';
import { Employee } from '../stores/employeeStore';

export const useEmployeeSearch = (employees?: Employee[]) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredEmployees = useMemo(() => {
    if (!searchTerm) return employees;

    const lowerSearchTerm = searchTerm.toLowerCase();
    return employees?.filter(
      (employee) =>
        employee.name.toLowerCase().includes(lowerSearchTerm) ||
        employee.job.toLowerCase().includes(lowerSearchTerm) ||
        employee.phone.includes(lowerSearchTerm),
    );
  }, [employees, searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    filteredEmployees,
  };
};
