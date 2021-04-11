import { useState, useEffect } from 'react';
import MainLayout from '../components/MainLayout';
import { TDealGameCard } from '../types/GameTypes';
import GameCard from '../components/GameCard';
import { getDeals, getDealsByStore } from '../requests';
import TextInput from '../components/shared/TextInput';
import Checkbox from '../components/shared/Checkbox';
import Icon from '../components/shared/Icon';
import Accordion from '../components/shared/Accordion';
import { useParams, useLocation } from 'react-router-dom';

const DealList = () => {
  const [gameList, setGameList] = useState<TDealGameCard[]>();
  const [filteredList, setFilteredList] = useState<TDealGameCard[]>();
  const [searchValue, setSearchValue] = useState('');
  const [saleFilter, setSaleFilter] = useState(false);

  let { id: currentStoreId } = useParams<{ id: string }>();
  let location = useLocation();

    useEffect(() => {
      if(!currentStoreId) {
        getDeals()
          .then(res => setGameList(res));

        console.log('should not', currentStoreId)
      }
    }, [location]);

    useEffect(() => {
      if(currentStoreId) {
        getDealsByStore(currentStoreId)
          .then(res => setGameList(res));
          console.log('should', currentStoreId)
      }
    }, [location]);

    useEffect(() => setFilteredList(gameList), [gameList]);

    const searchFilter = (value: string) => {
      setSearchValue(value);
      const searchList = gameList?.filter(game => game.title.toLowerCase().includes(value.toLowerCase()));
      setFilteredList(searchList);
    };

    useEffect(() => {
      if(saleFilter) {
        const onSaleFilter = filteredList?.filter((game) => game.isOnSale === "1");
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