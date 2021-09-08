import React from 'react';
// @ts-ignore
import { UserIcon } from './UserIcon.tsx';

const Header = () => {
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
  };

  return (
    <div>
      <a href="./"> Q and A</a>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchInputChange}
      />
      <a href="./signin">
        <UserIcon />
        <span>Sign In</span>
      </a>
    </div>
  );
};
export default Header;
