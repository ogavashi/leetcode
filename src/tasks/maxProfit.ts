export function maxProfit(prices: number[]): number {
  if (prices.length < 2) {
    return 0;
  }

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentProfit = prices[i] - minPrice;
    maxProfit = Math.max(maxProfit, currentProfit);
    minPrice = Math.min(minPrice, prices[i]);
  }

  return maxProfit;
}
