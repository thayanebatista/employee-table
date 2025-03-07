import React from 'react';
import BeTalent from '../assets/BeTalent.svg';

const Header: React.FC = () => {
  return (
    <div className="h-15 absolute inset-x-0 top-0 flex w-full bg-white shadow-md">
      <button className="px-3 md:px-6">
        <img src={BeTalent} alt="logo" />
      </button>
    </div>
  );
};

export default Header;
