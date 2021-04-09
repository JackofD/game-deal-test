import { FC } from 'react';
import Header from './Header';

const MainLayout:FC = (children) => {
  return (
    <>
      <Header />
      <div className='p-4'>
        {children}
      </div>
    </>
  );
};

export default MainLayout;