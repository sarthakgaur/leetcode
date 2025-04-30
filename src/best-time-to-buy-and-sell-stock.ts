function maxProfit(prices: number[]): number {
  let buyPrice = Number.POSITIVE_INFINITY;
  let sellPrice = Number.NEGATIVE_INFINITY;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];

    if (currentPrice < buyPrice) {
      buyPrice = currentPrice;
      sellPrice = Number.NEGATIVE_INFINITY;
    } else if (currentPrice > sellPrice) {
      sellPrice = currentPrice;

      if (sellPrice - buyPrice > maxProfit) {
        maxProfit = sellPrice - buyPrice;
      }
    }
  }

  return maxProfit;
}
