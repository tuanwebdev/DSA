const calculateMaxProfit = (stockPrices) =>{
    let maxProfit = 0;
    let lowestPrice = stockPrices[0];

    for (let i = 1; i < stockPrices.length; i++) {
        const currentPrice = stockPrices[i];

        if (currentPrice < lowestPrice) {
            lowestPrice = currentPrice;
        } else {
            maxProfit = Math.max(
                maxProfit,
                currentPrice - lowestPrice
            );
        }
    }

    return maxProfit;
}