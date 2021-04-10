import { FC } from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const Header:FC = () => {
  return (
    <header className='p-4 flex flex-row justify-between'>
      Header Logo
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