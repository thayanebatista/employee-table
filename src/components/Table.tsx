import React, { useState } from 'react';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { SearchInput } from './SearchInput';
import { Employee } from '../stores/employeeStore';
import { usePhoneFormat } from '../hooks/usePhoneFormat';

import ChevronUpIcon from '../assets/icons/ChevronUp.svg';
import ChevronDownIcon from '../assets/icons/ChevronDown.svg';
import CircleIcon from '../assets/icons/Circle.svg';

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
    <div className="flex flex-col gap-4 rounded-xl">
      <div className="flex flex-col items-start gap-2 p-3">
        <h1 className="text-black">Funcionários</h1>
        <SearchInput />
      </div>
      <div className="rounded-xl bg-white shadow-md">
        <table className="w-full">
          <thead className="bg-primary rounded-2xl">
            <tr>
              <th className="w-1/4 p-4 text-left text-white">Foto</th>
              <th className="w-2/4 p-4 text-left text-white">Nome</th>
              <th className="w-1/4 p-4 text-right text-white">
                <img src={CircleIcon} alt="Ações" className="h-2 w-2 cursor-pointer" />
              </th>
            </tr>
          </thead>
          <tbody>
            {employees?.map((employee) => (
              <React.Fragment key={employee.id}>
                <tr
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => toggleEmployeeExpand(employee.id)}
                >
                  <td className="p-4">
                    <img
                      src={employee.image}
                      alt={`Foto de ${employee.name}`}
                      className="h-[34px] w-[34px] rounded-full object-cover"
                    />
                  </td>
                  <td className="p-4">{employee.name}</td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      {expandedEmployeeId === employee.id ? (
                        <img src={ChevronUpIcon} alt="Expandir" className="h-8 w-8" />
                      ) : (
                        <img src={ChevronDownIcon} alt="Expandir" className="h-8 w-8" />
                      )}
                    </div>
                  </td>
                </tr>
                {expandedEmployeeId === employee.id && (
                  <tr>
                    <td colSpan={3} className="bg-gray-50 p-4">
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
