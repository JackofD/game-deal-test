import { FC } from 'react';
import Header from './Header';

const MainLayout:FC = (props) => {
  return (
    <>
      <Header />
      <div className="p-8 max-w-7xl mx-auto my-0">
        {props.children}
      </div>
    </>
  );
};

export default MainLayout;