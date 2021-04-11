const baseDealApiUrl = 'https://www.cheapshark.com/api/1.0/';

export const getDeals = async () => {
  const response = await fetch(baseDealApiUrl + 'deals');
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

export const getDealDetail = async (id: string) => {
  const response = await fetch(baseDealApiUrl + `deals?id=${id}`);
  const result = await response.json();

  const { gameInfo, cheaperStores } = result;

  const game = {
    name: gameInfo.name,
    gameID: gameInfo.gameID,
    storeID: gameInfo.storeID,
    salePrice: gameInfo.salePrice,
    retailPrice: gameInfo.retailPrice,
    imageThumb: gameInfo.thumb,
    cheaperStores: cheaperStores
  };

  return game;
};

export const getStores = async () => {
  const response = await fetch(baseDealApiUrl + 'stores');
  const result = await response.json();

  return result.map((store: any) => {
    return {
      storeID: store.storeID,
      storeName: store.storeName,
      isActive: store.isActive,
      images: store.images
    };
  });
};

export const getGameLookup = async (gameID: string) => {
  const response = await fetch(baseDealApiUrl + `games?id=${gameID}`);
  const result = await response.json();

  return result.deals;
};