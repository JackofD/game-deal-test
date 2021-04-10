import { TGameCard } from "./types/GameTypes";

const baseDealApiUrl = 'https://www.cheapshark.com/api/1.0/deals';

export const getDeals = async () => {
  const response = await fetch(baseDealApiUrl);
  const result = await response.json();
  
  return result.map((item: any) => {
    return {
      id: item.dealID,
      gameId: item.gameID,
      title: item.title,
      salePrice: item.salePrice,
      normalPrice: item.normalPrice,
      isOnSale: item.isOnSale,
      imageThumb: item.thumb
    }

  });
};