function bestTimeToBuyAndSell(prices) {
    if (prices.length <= 0 ) return 0

    let minPrice = prices[0]
    let maxProfit = 0

    for (let i = 1; i < prices.length ; i++) {
        const currentPrice = prices[i]
        const currentProfit = currentPrice - minPrice
        
        maxProfit = Math.max(currentProfit, maxProfit)
        minPrice = Math.min(currentPrice, minPrice)
    }

    return maxProfit
}

console.log(bestTimeToBuyAndSell([7, 1, 5, 3, 6, 4])); // Output: 5
