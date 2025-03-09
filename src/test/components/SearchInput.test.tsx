import { describe, it, expect, vi } from 'vitest';
import { SearchInput } from '@/components/SearchInput';
import { render, screen, fireEvent } from '@testing-library/react';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe('SearchInput', () => {
  it('renderiza o input corretamente', () => {
    const mockOnChange = vi.fn();

    render(
      <SearchInput
        placeholder="Buscar funcionário"
        onChange={mockOnChange}
      />,
    );

    const input = screen.getByPlaceholderText('Buscar funcionário');
    expect(input).toBeInTheDocument();
  });

  it('chama a função onChange quando o texto é alterado', () => {
    const mockOnChange = vi.fn();

    render(<SearchInput onChange={mockOnChange} />);

    const input = screen.getByPlaceholderText(
      'employeesTable.searchPlaceholder',
    );
    fireEvent.change(input, { target: { value: 'João' } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
