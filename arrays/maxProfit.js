/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  let rightIndex = prices.length - 1;
  for (let i = 0; i < rightIndex; i++) {
    const left = prices[i];
    const right = prices[rightIndex]

    console.log(right - left)
    if (right - left > profit) {
      profit = right - left;
    }
    rightIndex--;
  }
  return profit
};

console.log(maxProfit([1, 4, 2]))