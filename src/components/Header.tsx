import React from 'react';
import BeTalent from '../assets/icons/BeTalent.svg';

import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex h-15 w-full bg-white shadow-md">
      <button className="px-5 lg:px-8">
        <img
          src={BeTalent}
          alt={t('header.logo')}
        />
      </button>
    </div>
  );
};

export default Header;
