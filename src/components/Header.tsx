import { FC } from 'react';
import {
  NavLink
} from "react-router-dom";

const Header:FC = () => {
  return (
    <header className='p-8 flex flex-row justify-between items-center flex-wrap max-w-7xl mx-auto mt-0 rounded-b-3xl shadow-lg'>
      <div className="flex items-center">
        <img src="/logo.png" />
        <h1 className="text-3xl ml-8">CheapShark</h1>
      </div>
      <nav>
          <ul className="flex flex-row gap-8 text-xl">
            <li><NavLink to="/" exact activeClassName="text-green-500">Deals</NavLink></li>
            {/* <li><NavLink to="/games" activeClassName="text-green-500">Games</NavLink></li> */}
            <li><NavLink to="/stores" activeClassName="text-green-500">Stores</NavLink></li>
          </ul>
      </nav>
    </header>
  );
};

export default Header;