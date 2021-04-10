import { useState, useEffect } from 'react';
import MainLayout from '../components/MainLayout';
import { TGameCard } from '../types/GameTypes';
import GameCard from '../components/GameCard';
import { getDeals } from '../requests';

const DealList = () => {
  const [gameList, setGameList] = useState<TGameCard[]>();

    useEffect(() => {
      getDeals().then(res => setGameList(res));
    }, []);


  return (
    <MainLayout>
      <div className="">
        Deal listing page
        <section className="mb-4">
          Deal search and filters
          {/* an accordion is needed in here */}
        </section>
        <section className="flex flex-row flex-wrap justify-evenly">
          {
            gameList && gameList.length > 0
            ? gameList.map((game, index) => {
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