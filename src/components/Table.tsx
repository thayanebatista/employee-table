import React, { useState } from 'react';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { SearchInput } from './SearchInput';
import { Employee } from '../stores/employeeStore';
import { usePhoneFormat } from '../hooks/usePhoneFormat';

import CircleIcon from '../assets/icons/Circle.svg';
import ChevronUpIcon from '../assets/icons/ChevronUp.svg';
import ChevronDownIcon from '../assets/icons/ChevronDown.svg';

interface TableProps {
  employees?: Employee[];
}

const Table: React.FC<TableProps> = ({ employees }) => {
  const [expandedEmployeeId, setExpandedEmployeeId] = useState<string | null>(null);

  const toggleEmployeeExpand = (employeeId: string) => {
    setExpandedEmployeeId((prev) => (prev === employeeId ? null : employeeId));
  };

  const { formatPhoneNumber } = usePhoneFormat();

  const formatDate = (date: string) => {
    return format(new Date(date), 'dd/MM/yyyy', { locale: ptBR });
  };

  return (
    <div className="flex flex-col gap-6 rounded-xl py-6">
      <div className="flex flex-col gap-4 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <h1 className="text-black">Funcionários</h1>
        </div>
        <SearchInput />
      </div>
      <div className="px-5 lg:px-8">
        <table className="w-full border-separate border-spacing-0 overflow-hidden rounded-xl shadow-lg">
          <thead className="bg-primary">
            <tr className="first:rounded-t-xl">
              <th className="p-4 text-left text-white first:rounded-tl-xl">
                <h2>FOTO</h2>
              </th>
              <th className="p-4 text-left text-white">
                <h2>NOME</h2>
              </th>
              <th className="hidden p-4 text-left text-white lg:table-cell">
                <h2>CARGO</h2>
              </th>
              <th className="hidden p-4 text-left text-white lg:table-cell">
                <h2>DATA DE ADMISSÃO</h2>
              </th>
              <th className="hidden p-4 text-left text-white lg:table-cell">
                <h2>TELEFONE</h2>
              </th>
              <th className="flex items-center justify-end first:rounded-tr-xl">
                <img
                  src={CircleIcon}
                  alt="Ações"
                  className="mx-7 my-5 h-2 w-2 cursor-pointer lg:hidden"
                />
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {employees?.map((employee) => (
              <React.Fragment key={employee.id}>
                <tr
                  className="cursor-pointer hover:bg-gray-100 lg:cursor-default"
                  onClick={() => toggleEmployeeExpand(employee.id)}
                >
                  <td className="p-4">
                    <img
                      src={employee.image}
                      alt={`Foto de ${employee.name}`}
                      className="h-[34px] w-[34px] rounded-full object-cover"
                    />
                  </td>
                  <td className="p-4">
                    <h3>{employee.name}</h3>
                  </td>

                  <td className="hidden p-4 lg:table-cell">
                    <h3>{employee.job}</h3>
                  </td>
                  <td className="hidden p-4 lg:table-cell">
                    <h3>{formatDate(employee.admission_date)}</h3>
                  </td>
                  <td className="hidden p-4 lg:table-cell">
                    <h3>{formatPhoneNumber(employee.phone)}</h3>
                  </td>

                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end space-x-2 lg:hidden">
                      {expandedEmployeeId === employee.id ? (
                        <img src={ChevronUpIcon} alt="Expandir" className="h-8 w-8" />
                      ) : (
                        <img src={ChevronDownIcon} alt="Expandir" className="h-8 w-8" />
                      )}
                    </div>
                  </td>
                </tr>

                {expandedEmployeeId === employee.id && (
                  <tr className="lg:hidden">
                    <td colSpan={3} className="bg-white p-4">
                      <div className="flex flex-col gap-4 text-black">
                        <div className="flex justify-between gap-2">
                          <h2>Cargo</h2>
                          <h3>{employee.job}</h3>
                        </div>
                        <div className="flex justify-between gap-2">
                          <h2>Data de Admissão</h2>
                          <h3>{formatDate(employee.admission_date)}</h3>
                        </div>
                        <div className="flex justify-between gap-2">
                          <h2>Telefone</h2>
                          <h3>{formatPhoneNumber(employee.phone)}</h3>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
