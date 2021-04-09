import { FC } from 'react';
import MainLayout from '../components/MainLayout';

const DealList = () => {
  return (
    <MainLayout>
      <div className="">
        Deal listing page
        <section className="mb-4">
          Deal search and filters
          {/* an accordion is needed in here */}
        </section>
        <section>
          Deal game cards
        </section>
      </div>
    </MainLayout>
  );
};

export default DealList;