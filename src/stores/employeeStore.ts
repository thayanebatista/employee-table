import { create } from 'zustand';
import apiService from '../services/api.service';

export interface Employee {
  id: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

interface EmployeeState {
  employees: Employee[];
  isLoading: boolean;
  error: string | null;

  fetchEmployees: () => Promise<void>;
  addEmployee: (employee: Omit<Employee, 'id'>) => Promise<void>;
  removeEmployee: (id: string) => Promise<void>;
  updateEmployee: (employee: Employee) => Promise<void>;
}

export const useEmployeeStore = create<EmployeeState>((set) => ({
  employees: [],
  isLoading: false,
  error: null,

  fetchEmployees: async () => {
    set({ isLoading: true, error: null });
    try {
      const employees = await apiService.get<Employee[]>('/employees');
      set({
        employees,
        isLoading: false,
      });
    } catch (error) {
      set({
        error:
          error instanceof Error ?
            error.message
          : 'Erro ao buscar funcionários',
        isLoading: false,
      });
    }
  },

  addEmployee: async (newEmployee) => {
    set({ isLoading: true, error: null });
    try {
      const addedEmployee = await apiService.post<Employee>(
        '/employees',
        newEmployee,
      );
      set((state) => ({
        employees: [...state.employees, addedEmployee],
        isLoading: false,
      }));
    } catch (error) {
      set({
        error:
          error instanceof Error ?
            error.message
          : 'Erro ao adicionar funcionário',
        isLoading: false,
      });
    }
  },

  removeEmployee: async (id) => {
    set({ isLoading: true, error: null });
    try {
      await apiService.delete(`/employees/${id}`);
      set((state) => ({
        employees: state.employees.filter((emp) => emp.id !== id),
        isLoading: false,
      }));
    } catch (error) {
      set({
        error:
          error instanceof Error ?
            error.message
          : 'Erro ao remover funcionário',
        isLoading: false,
      });
    }
  },

  updateEmployee: async (updatedEmployee) => {
    set({ isLoading: true, error: null });
    try {
      const employee = await apiService.patch<Employee>(
        `/employees/${updatedEmployee.id}`,
        updatedEmployee,
      );
      set((state) => ({
        employees: state.employees.map((emp) =>
          emp.id === employee.id ? employee : emp,
        ),
        isLoading: false,
      }));
    } catch (error) {
      set({
        error:
          error instanceof Error ?
            error.message
          : 'Erro ao atualizar funcionário',
        isLoading: false,
      });
    }
  },
}));
