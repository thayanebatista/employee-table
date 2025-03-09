import React, { useEffect } from 'react';
import { useEmployeeStore } from '../stores/employeeStore';
import { useEmployees } from '../hooks/useEmployees';

import Header from '../components/Header';
import Loader from '../components/GlobalLoader';
import EmployeesTable from '../components/EmployeesTable';

const Home: React.FC = () => {
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

      {error ? (
        <div className="flex items-center justify-center">
          <h1>Erro ao carregar os dados</h1>
        </div>
      ) : (
        <EmployeesTable employees={employees} />
      )}
    </div>
  );
};

export default Home;
