import { FC, useState, useEffect } from 'react';
import MainLayout from '../components/MainLayout';
import Button from '../components/shared/Button';
import { getDealDetail, getGameLookup, getStores } from '../requests';
import { TGameDetail, TStore } from '../types/GameTypes';
import { useParams, useHistory } from 'react-router-dom';

const DealDetail: FC = () => {
  const [gameData, setGameData] = useState<TGameDetail>();
  const [stores, setStores] = useState<TStore[]>();
  const [gameDeals, setGameDeals] = useState<{storeID: string, dealID: string, price: string, retailPrice: string, savings: string}[]>();
  
  let { id: currentDealId } = useParams<{ id: string }>();
  let history = useHistory();

  useEffect(() => {
    getDealDetail(currentDealId)
      .then(res => setGameData(res));
  }, [currentDealId]);

  useEffect(() => {
    getStores()
      .then(res => setStores(res));
  }, []);

  useEffect(() => {
    if(gameData) {
      getGameLookup(gameData.gameID)
        .then(res => {
          setGameDeals(res);
        });
    }
  }, [gameData]);

  const renderOtherDealStores = () => {
    return (
      <>
      {gameDeals?.map((deal, index) => {
        if(deal.dealID !== currentDealId) {
          return (
            <div key={index} className="flex justify-between items-center border-b border-gray-200 mb-2 py-2">
              <section className="flex flex-col justify-center">
                <div className="font-semibold text-xl">
                  {
                    // find the store and its name
                    stores?.find(store => {
                      return store.storeID === deal.storeID
                    })?.storeName
                  }
                </div>
                <div className="font-medium">
                  <span className={`${deal.retailPrice !== deal.price && 'line-through'} mr-1`}>${deal.retailPrice}</span>
                  {deal.price && deal.retailPrice !== deal.price && <span className="text-green-500">${deal.price}</span>}
                </div>
              </section>
              <Button className="bg-gray-100 font-medium ml-2" text="View More" click={() => history.push(`/DealDetail/${deal.dealID}`)} />
            </div>
          );
      }
      })}
      </>
    );
  };

  return (
    <MainLayout>
      <div className="flex flex-wrap justify-between mt-4">
        <section className="p-4 max-w-lg">
          <h3 className="font-medium text-3xl mb-2">{gameData?.name}</h3>
          <section className="flex items-center justify-between mb-4">
            <div className="font-semibold mr-8">
              <span className={`${gameData?.salePrice !== gameData?.retailPrice && 'line-through'} mr-1`}>${gameData?.retailPrice}</span>
              {gameData?.salePrice && gameData?.salePrice !== gameData?.retailPrice && <span className="text-green-500">${gameData?.salePrice}</span>}
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
            {
              gameDeals?.length ? renderOtherDealStores() : "No other deals found for this game right now :("
            }
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default DealDetail;