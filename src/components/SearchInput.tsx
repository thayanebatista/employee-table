import React, { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

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
  placeholder,
  onChange,
  className = '',
  value,
  name,
  disabled = false,
}) => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full lg:w-1/4">
      <input
        type="text"
        name={name}
        placeholder={placeholder || t('employeesTable.searchPlaceholder')}
        onChange={onChange}
        value={value}
        disabled={disabled}
        className={`border-gray-secondary w-full rounded-xl border bg-white p-4 focus:outline-none ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${className} `}
      />
      <div className="absolute inset-y-0 right-4 flex cursor-pointer items-center">
        <img
          src={SearchIcon}
          alt={t('employeesTable.searchPlaceholder')}
          className={`h-6 w-6 ${disabled ? 'text-gray-300' : 'text-gray-400'}`}
        />
      </div>
    </div>
  );
};
