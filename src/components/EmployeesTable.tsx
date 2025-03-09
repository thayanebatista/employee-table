import React, { useState } from 'react';

import { SearchInput } from './SearchInput';
import { useTranslation } from 'react-i18next';
import { formatDate } from '../utils/formatDate';
import { Employee } from '../stores/employeeStore';
import { formatPhoneNumber } from '../utils/phoneFormat';
import { useEmployeeSearch } from '../hooks/useEmployeeSearch';

import CircleIcon from '../assets/icons/Circle.svg';
import ChevronUpIcon from '../assets/icons/ChevronUp.svg';
import ChevronDownIcon from '../assets/icons/ChevronDown.svg';

interface EmployeesTableProps {
  employees?: Employee[];
}

const EmployeesTable: React.FC<EmployeesTableProps> = ({ employees }) => {
  const [expandedEmployeeId, setExpandedEmployeeId] = useState<string | null>(
    null,
  );
  const { searchTerm, setSearchTerm, filteredEmployees } =
    useEmployeeSearch(employees);

  const toggleEmployeeExpand = (employeeId: string) => {
    setExpandedEmployeeId((prev) => (prev === employeeId ? null : employeeId));
  };

  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6 rounded-xl py-6">
      <div className="flex flex-col gap-4 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <h1 className="text-black">
          {t('employeesTable.title')}
        </h1>
        <SearchInput
          onChange={(event) => setSearchTerm(event.target.value)}
          value={searchTerm}
        />
      </div>
      <div className="h-screen px-5 lg:px-8">
        <table className="w-full border-separate border-spacing-0 overflow-hidden rounded-xl shadow-lg">
          <thead className="bg-primary">
            <tr className="first:rounded-t-xl">
              <th className="p-4 text-left text-white first:rounded-tl-xl">
                <h2>{t('employeesTable.headers.photo')}</h2>
              </th>
              <th className="p-4 text-left text-white">
                <h2>{t('employeesTable.headers.name')}</h2>
              </th>
              <th className="hidden p-4 text-left text-white lg:table-cell">
                <h2>{t('employeesTable.headers.job')}</h2>
              </th>
              <th className="hidden p-4 text-left text-white lg:table-cell">
                <h2>{t('employeesTable.headers.admissionDate')}</h2>
              </th>
              <th className="hidden p-4 text-left text-white lg:table-cell">
                <h2>{t('employeesTable.headers.phone')}</h2>
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
            {filteredEmployees?.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="p-4 text-center"
                >
                  Nenhum funcionário encontrado
                </td>
              </tr>
            )}
            {filteredEmployees?.map((employee) => (
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
                      {expandedEmployeeId === employee.id ?
                        <img
                          src={ChevronUpIcon}
                          alt="Expandir"
                          className="h-8 w-8"
                        />
                      : <img
                          src={ChevronDownIcon}
                          alt="Expandir"
                          className="h-8 w-8"
                        />
                      }
                    </div>
                  </td>
                </tr>

                {expandedEmployeeId === employee.id && (
                  <tr className="lg:hidden">
                    <td
                      colSpan={3}
                      className="bg-white p-4"
                    >
                      <div className="flex flex-col gap-4 text-black">
                        <div className="flex justify-between gap-2">
                          <h2 className="font-bold">
                            {t('employeesTable.expanded.job')}
                          </h2>
                          <h3>{employee.job}</h3>
                        </div>
                        <div className="flex justify-between gap-2">
                          <h2 className="font-bold">
                            {t('employeesTable.expanded.admissionDate')}
                          </h2>
                          <h3>{formatDate(employee.admission_date)}</h3>
                        </div>
                        <div className="flex justify-between gap-2">
                          <h2 className="font-bold">
                            {t('employeesTable.expanded.phone')}
                          </h2>
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

export default EmployeesTable;
