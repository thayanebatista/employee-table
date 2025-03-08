import React from 'react';
import SearchIcon from '../assets/icons/Search.svg';

interface SearchInputProps {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
    <div className="relative w-full px-3">
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={disabled}
        className={`border-gray-secondary w-full rounded-xl border bg-white p-4 focus:outline-none ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${className}`}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-7">
        <img
          src={SearchIcon}
          alt="Pesquisar"
          className={`h-6 w-6 ${disabled ? 'text-gray-300' : 'text-gray-400'}`}
        />
      </div>
    </div>
  );
};
