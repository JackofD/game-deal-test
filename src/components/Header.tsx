import { FC } from 'react';

const Header:FC = () => {
  return (
    <header className='p-4 flex flex-row justify-between'>
      Header Logo
      <nav>
        <ul className="flex flex-row gap-8">
          <li>Deals</li>
          <li>Games</li>
          <li>Stores</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;