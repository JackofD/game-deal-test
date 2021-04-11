import { FC, useState, useEffect } from 'react';
import MainLayout from '../components/MainLayout';
import Button from '../components/shared/Button';
import { getGameDetail, getStores } from '../requests';
import { TGameDetail, TStore } from '../types/GameTypes';
import { useParams } from 'react-router-dom';

const DealDetail: FC = () => {
  const [gameData, setGameData] = useState<TGameDetail>();
  const [stores, setStores] = useState<TStore[]>();
  let { id } = useParams<{ id: string }>();

  useEffect(() => {
    getGameDetail(id)
      .then(res => setGameData(res));
  }, [id]);

  useEffect(() => {
    getStores()
      .then(res => setStores(res));
  }, []);

  // useEffect(() => {
  //   console.log(stores);
  // }, [stores]);

  useEffect(() => {
    console.log(stores);
  }, [stores]);

  return (
    <MainLayout>
      <div className="flex flex-wrap justify-around mt-4">
        <section className="p-4 max-w-lg">
          <h3 className="font-medium text-3xl mb-2">{gameData?.name}</h3>
          <section className="flex items-center justify-between mb-4">
            <div className="font-semibold mr-8">
              <span className="line-through mr-1">${gameData?.retailPrice}</span>
              {gameData?.salePrice && <span className="text-green-500">${gameData?.salePrice}</span>}
            </div>
            {gameData?.salePrice && <div className="italic">You save ${(parseFloat((gameData?.retailPrice || '0')) - parseFloat((gameData?.salePrice || '0'))).toFixed(2)}</div>}
          </section>
          <div className="p-4 bg-gray-200 text-2xl font-medium mb-4">Available at {
            stores && gameData ? stores.filter(store => store.storeID === gameData.storeID)[0].storeName : 'storeName'
          }</div>
          <div className="w-80 object-contain">
            <img className="w-full max-w-full" src={gameData?.imageThumb} alt="game image" />
          </div>
        </section>
        <section className="p-4">
          <div className="p-4 bg-gray-200 text-2xl font-medium mb-4">Other deals for this game</div>
          <div className="">
            <div className="flex justify-between items-center">
              <section>store and pricing</section>
              <Button className="bg-gray-100 font-medium ml-2" text="View More" click={() => {}} />
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default DealDetail;