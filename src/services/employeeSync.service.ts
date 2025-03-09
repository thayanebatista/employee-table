import { Employee } from '../stores/employeeStore';
import apiService from './api.service';

export interface EmployeeSyncResult<T> {
  data?: T;
  error?: Error;
}

export class EmployeeSyncService {
  async fetchEmployees(): Promise<EmployeeSyncResult<Employee[]>> {
    try {
      const employees = await apiService.get<Employee[]>('/employees');
      return { data: employees };
    } catch (error) {
      return {
        error:
          error instanceof Error ? error : (
            new Error('Erro ao buscar funcionários')
          ),
      };
    }
  }

  async addEmployee(
    employee: Omit<Employee, 'id'>,
  ): Promise<EmployeeSyncResult<Employee>> {
    try {
      const addedEmployee = await apiService.post<Employee>(
        '/employees',
        employee,
      );
      return { data: addedEmployee };
    } catch (error) {
      return {
        error:
          error instanceof Error ? error : (
            new Error('Erro ao adicionar funcionário')
          ),
      };
    }
  }

  async removeEmployee(id: string): Promise<EmployeeSyncResult<void>> {
    try {
      await apiService.delete(`/employees/${id}`);
      return {};
    } catch (error) {
      return {
        error:
          error instanceof Error ? error : (
            new Error('Erro ao remover funcionário')
          ),
      };
    }
  }

  async updateEmployee(
    employee: Employee,
  ): Promise<EmployeeSyncResult<Employee>> {
    try {
      const updatedEmployee = await apiService.patch<Employee>(
        `/employees/${employee.id}`,
        employee,
      );
      return { data: updatedEmployee };
    } catch (error) {
      return {
        error:
          error instanceof Error ? error : (
            new Error('Erro ao atualizar funcionário')
          ),
      };
    }
  }
}

export const employeeSyncService = new EmployeeSyncService();
export default employeeSyncService;
