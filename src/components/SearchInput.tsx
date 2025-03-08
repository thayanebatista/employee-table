import React, { ChangeEvent } from 'react';
import SearchIcon from '../assets/icons/Search.svg';

interface SearchInputProps {
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value?: string;
  name?: string;
  disabled?: boolean;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Pesquisar',
  onChange,
  className = '',
  value,
  name,
  disabled = false,
}) => {
  return (
    <div className="relative w-full lg:w-1/4">
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={disabled}
        className={`border-gray-secondary w-full rounded-xl border bg-white p-4 focus:outline-none ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${className}`}
      />
      <div className="absolute inset-y-0 right-4 flex cursor-pointer items-center">
        <img
          src={SearchIcon}
          alt="Pesquisar"
          className={`h-6 w-6 ${disabled ? 'text-gray-300' : 'text-gray-400'}`}
        />
      </div>
    </div>
  );
};
