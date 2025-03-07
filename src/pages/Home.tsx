import React, { useEffect } from 'react';
import { useEmployeeStore } from '../stores/employeeStore';
import { useEmployees } from '../hooks/useEmployees';

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
    <div className="bg-gray h-screen gap-4">
      <Header />
      <div className="flex h-full flex-col items-center justify-center gap-4">
        {employees?.map((employee) => (
          <div key={employee.id}>
            {employee.name} - {employee.job}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
