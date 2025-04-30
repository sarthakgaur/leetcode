function maxProfit2(prices: number[]): number {
  let buyPrice = Number.POSITIVE_INFINITY;
  let sellPrice = Number.NEGATIVE_INFINITY;
  let totalProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];

    if (currentPrice <= buyPrice || currentPrice < sellPrice) {
      if (sellPrice !== Number.NEGATIVE_INFINITY) {
        totalProfit += sellPrice - buyPrice;
      }

      buyPrice = currentPrice;
      sellPrice = Number.NEGATIVE_INFINITY;
    } else if (currentPrice >= sellPrice) {
      sellPrice = currentPrice;

      if (i + 1 >= prices.length) {
        totalProfit += sellPrice - buyPrice;
      }
    }
  }

  return totalProfit;
}
