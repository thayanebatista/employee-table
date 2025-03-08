import React, { useEffect } from 'react';
import { useEmployeeStore } from '../stores/employeeStore';
import { useEmployees } from '../hooks/useEmployees';

import Table from '../components/Table';
import Header from '../components/Header';

const Home: React.FC = () => {
  const { data: employees, isLoading, error } = useEmployees();
  const setEmployees = useEmployeeStore((state) => state.setEmployees);

  useEffect(() => {
    if (employees) {
      setEmployees(employees);
    }
  }, [employees, setEmployees]);

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar os dados</p>;

  return (
    <div className="bg-gray h-full gap-4">
      <Header />
      <Table employees={employees} />
    </div>
  );
};

export default Home;
