import { Employee } from '@/stores/employeeStore';
import { renderHook } from '@testing-library/react';
import { useEmployees } from '@/hooks/useEmployees';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const mockStore: {
  employees: Employee[];
  isLoading: boolean;
  error: string | null;
  fetchEmployees: ReturnType<typeof vi.fn>;
} = {
  employees: [],
  isLoading: false,
  error: null,
  fetchEmployees: vi.fn(),
};

vi.mock('@/stores/employeeStore', () => ({
  useEmployeeStore: () => mockStore,
}));

describe('useEmployees Hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('deve chamar fetchEmployees automaticamente no useEffect', async () => {
    renderHook(() => useEmployees());

    expect(mockStore.fetchEmployees).toHaveBeenCalledTimes(1);
  });

  it('deve retornar os dados corretos quando há funcionários', async () => {
    const mockEmployees = [
      {
        id: '1',
        name: 'John Doe',
        job: 'Developer',
        admission_date: '2021-01-01',
        phone: '1234567890',
        image: 'image.jpg',
      },
      {
        id: '2',
        name: 'Jane Doe',
        job: 'Designer',
        admission_date: '2021-01-01',
        phone: '1234567890',
        image: 'image.jpg',
      },
    ];

    mockStore.employees = mockEmployees;
    mockStore.isLoading = false;
    mockStore.error = null;

    const { result } = renderHook(() => useEmployees());

    expect(result.current.data).toEqual(mockEmployees);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('deve refletir estado de loading corretamente', async () => {
    mockStore.employees = [];
    mockStore.isLoading = true;
    mockStore.error = null;

    const { result } = renderHook(() => useEmployees());

    expect(result.current.isLoading).toBe(true);
  });

  it('deve lidar com erros corretamente', async () => {
    mockStore.employees = [];
    mockStore.isLoading = false;
    mockStore.error = 'Erro ao buscar funcionários';

    const { result } = renderHook(() => useEmployees());

    expect(result.current.error).toBe('Erro ao buscar funcionários');
  });
});
