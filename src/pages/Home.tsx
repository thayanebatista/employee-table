import React, { useEffect } from 'react';
import { useEmployeeStore } from '../stores/employeeStore';
import { useEmployees } from '../hooks/useEmployees';

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
    <div className="home">
      <div className="flex flex-col items-start p-5">
        <h2>Home</h2>
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
