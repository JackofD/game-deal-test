import { FC } from 'react';
import { TDealGameCard } from '../types/GameTypes';
import Button from './shared/Button';
import { useHistory } from "react-router-dom";

type GameCardProps = {
  className?: string;
  gameData: TDealGameCard;
};

const GameCard: FC<GameCardProps> = (props) => {
  let history = useHistory();
  const { gameData: {title, isOnSale, salePrice, normalPrice, id}} = props;

  return (
    <div className="flex flex-col min p-4 mb-8 bg-gray-100 rounded-md">
      <section className="mb-8">
        <h3 className="text-2xl font-bold mb-2 overflow-ellipsis overflow-hidden whitespace-nowrap">{title || 'no title'}</h3>
        <section className="flex flex-row text-base font-semibold">
          {
            isOnSale && salePrice
            ? <span className="line-through mr-2">${normalPrice}</span>
            : <span className="mr-1">${normalPrice}</span>
          }
          {
            isOnSale && <span className="text-green-500">${salePrice}</span>
          }
        </section>
      </section>
      <Button className="w-1/2" text="View more" click={() => history.push(`/DealDetail/${id}`)} />
    </div>
  );
};

export default GameCard;