export type TGameCard = {
  id: string;
  gameId: string;
  title: string;
  salePrice?: string;
  normalPrice: string;
  isOnSale: string;
  imageThumb?: string;
};

export type TDealList = {
  games: TGameCard[];
}