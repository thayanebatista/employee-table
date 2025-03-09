import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useEmployees } from '../hooks/useEmployees';
import { useEmployeeStore } from '../stores/employeeStore';

import Header from '../components/Header';
import Loader from '../components/GlobalLoader';
import EmployeesTable from '../components/EmployeesTable';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const { data: employees, isLoading, error } = useEmployees();
  const setEmployees = useEmployeeStore((state) => state.setEmployees);
  useEffect(() => {
    if (employees) {
      setEmployees(employees);
    }
  }, [employees, setEmployees]);

  if (isLoading) return <Loader isLoading={isLoading} />;

  return (
    <div className="bg-gray">
      <Header />
      {error ?
        <div className="flex h-svh items-center justify-center">
          <h1>{t('errors.genericError')}</h1>
        </div>
      : <EmployeesTable employees={employees} />}
    </div>
  );
};

export default Home;
