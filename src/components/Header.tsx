import { FC } from 'react';
import {
  Link
} from "react-router-dom";

const Header:FC = () => {
  return (
    <header className='p-8 flex flex-row justify-between items-center max-w-7xl mx-auto mt-0 rounded-b-3xl shadow-lg'>
      <div className="flex items-center">
        <img src="/logo.png" />
        <h1 className="text-3xl ml-8">CheapShark</h1>
      </div>
      <nav>
          <ul className="flex flex-row gap-8">
            <li><Link to="/">Deals</Link></li>
            {/* <li><Link to="/games">Games</Link></li> */}
            <li><Link to="/stores">Stores</Link></li>
          </ul>
      </nav>
    </header>
  );
};

export default Header;