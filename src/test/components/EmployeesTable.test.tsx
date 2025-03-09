import { describe, it, expect, vi } from 'vitest';
import { Employee } from '@/stores/employeeStore';
import { render, screen, fireEvent } from '@testing-library/react';

import EmployeesTable from '@/components/EmployeesTable';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

const mockEmployees: Employee[] = [
  {
    id: '1',
    name: 'João Silva',
    job: 'Desenvolvedor',
    admission_date: '2023-01-01',
    phone: '1234567890',
    image: 'url_imagem_1',
  },
  {
    id: '2',
    name: 'Maria Souza',
    job: 'Designer',
    admission_date: '2022-06-15',
    phone: '0987654321',
    image: 'url_imagem_2',
  },
];

describe('EmployeesTable', () => {
  it('renderiza a tabela de funcionários', () => {
    render(<EmployeesTable employees={mockEmployees} />);

    expect(screen.getByText('João Silva')).toBeInTheDocument();
    expect(screen.getByText('Maria Souza')).toBeInTheDocument();
  });

  it('filtra funcionários corretamente', () => {
    render(<EmployeesTable employees={mockEmployees} />);

    const searchInput = screen.getByPlaceholderText(
      'employeesTable.searchPlaceholder',
    );

    fireEvent.change(searchInput, { target: { value: 'João' } });

    expect(screen.getByText('João Silva')).toBeInTheDocument();
    expect(screen.queryByText('Maria Souza')).not.toBeInTheDocument();
  });
});
