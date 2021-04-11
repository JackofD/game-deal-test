export type TDealGameCard = {
  id: string;
  gameId: string;
  title: string;
  salePrice?: string;
  normalPrice: string;
  isOnSale: string;
  imageThumb?: string;
};

export type TGameDetail = {
  name: string;
  gameID: string;
  storeID: string;
  salePrice: string;
  retailPrice: string;
  imageThumb: string;
  cheaperStores: TDealStore[];
};

export type TDealStore = {
  dealID: string;
  retailPrice: string;
  salePrice: string;
  storeID: string;
};

export type TStore = {
  storeID: string;
  storeName: string;
  isActive: string;
};