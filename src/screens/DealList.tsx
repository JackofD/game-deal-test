import { useState, useEffect } from 'react';
import MainLayout from '../components/MainLayout';
import { TGameCard } from '../types/GameTypes';
import GameCard from '../components/GameCard';
import { getDeals } from '../requests';
import TextInput from '../components/shared/TextInput';
import Checkbox from '../components/shared/Checkbox';
import Icon from '../components/shared/Icon';
import Accordion from '../components/shared/Accordion';

const DealList = () => {
  const [gameList, setGameList] = useState<TGameCard[]>();
  const [filteredList, setFilteredList] = useState<TGameCard[]>();
  const [searchValue, setSearchValue] = useState('');
  const [saleFilter, setSaleFilter] = useState(false);

    useEffect(() => {
      getDeals()
        .then(res => setGameList(res));
    }, []);

    useEffect(() => setFilteredList(gameList), [gameList]);

    const searchFilter = (value: string) => {
      setSearchValue(value);
      const searchList = gameList?.filter(game => game.title.toLowerCase().includes(value.toLowerCase()));
      setFilteredList(searchList);
    };

    useEffect(() => {
      if(saleFilter) {
        const onSaleFilter = filteredList?.filter((game) => game.isOnSale);
        setFilteredList(onSaleFilter);
      } else {
        setFilteredList(gameList?.filter(game => game.title.toLowerCase().includes(searchValue.toLowerCase())));
      }
    }, [saleFilter]);


  return (
    <MainLayout>
      <div className="">
        <section className="flex flex-row justify-between mb-8">
          <h1 className="text-5xl font-semibold">Deals</h1>
          <TextInput className="w-72" placeholder="Search deals by name" value={searchValue} change={(value) => searchFilter(value)}>
            <Icon name="search" className="text-gray-400" />
          </TextInput>
        </section>
        <section className="py-4 mb-8 border-0 border-transparent border-b border-gray-200">
          <Accordion headerText="Filter">
            <Checkbox className="mt-4" labelText="On Sale" change={(val) => setSaleFilter(val)} />
          </Accordion>
        </section>
        <section className="grid gap-8 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            gameList && gameList.length > 0
            ? filteredList?.map((game, index) => {
              return <GameCard key={index} gameData={game} />
            })
            : <p>No deals found</p>
          }
        </section>
      </div>
    </MainLayout>
  );
};

export default DealList;