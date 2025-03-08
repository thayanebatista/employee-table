import React, { useEffect } from 'react';
import { useEmployeeStore } from '../stores/employeeStore';
import { useEmployees } from '../hooks/useEmployees';

import Table from '../components/Table';
import Header from '../components/Header';
import Loader from '../components/GlobalLoader';

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
    <div className="bg-gray h-screen gap-4">
      <Header />

      {error ? (
        <div className="h-100 flex items-center justify-center">
          <h1>Erro ao carregar os dados</h1>
        </div>
      ) : (
        <Table employees={employees} />
      )}
    </div>
  );
};

export default Home;
