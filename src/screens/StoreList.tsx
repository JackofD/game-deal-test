import React, { useState, useEffect } from 'react';
import MainLayout from '../components/MainLayout';
import Button from '../components/shared/Button';
import Icon from '../components/shared/Icon';
import TextInput from '../components/shared/TextInput';
import { getStores } from '../requests';
import { TStore } from '../types/GameTypes';

const StoreList = () => {
  const [searchValue, setSearchValue] = useState('');
  const [storeList, setStoreList] = useState<TStore[]>([]);
  const [filteredList, setFilteredList] = useState<TStore[]>([]);

  useEffect(() => {
    getStores()
      .then(res => setStoreList(res));
  }, []);

  useEffect(() => {
    setFilteredList(storeList);
  }, [storeList]);


  const searchFilter = (value: string) => {
    setSearchValue(value);
    const searchList = storeList?.filter(store => store.storeName.toLowerCase().includes(value.toLowerCase()));
    setFilteredList(searchList);
  };

  return (
    <MainLayout>
      <div>
        <section className="flex flex-row justify-between mb-8">
          <h1 className="text-5xl font-semibold">Deals</h1>
          <TextInput className="w-72" placeholder="Search deals by name" value={searchValue} change={(value) => searchFilter(value)}>
            <Icon name="search" className="text-gray-400" />
          </TextInput>
        </section>
        <section className="grid gap-8 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            storeList && storeList.length > 0
            ? filteredList.map((store, index) => {
              return (
                <div key={index} className="flex flex-col min p-4 mb-8 bg-gray-100 rounded-md">
                  <div>
                    <img src={'https://www.cheapshark.com' + store.images.banner} alt="store image" />
                  </div>
                  <section className="mb-8">
                    <div className="text-2xl font-bold mb-2">{store.storeName}</div>
                    {/* Deals count left out due to crazy amount of api calls just for vanity */}
                    {/* <div>Store deals</div> */}
                  </section>
                  <Button className="w-1/2 border-blue-400 text-blue-400 font-semibold" click={() => {}} text="View Deals" />
                </div>
              );
            })
            : "No stores found"
          }
        </section>
      </div>
    </MainLayout>
  );
};

export default StoreList;