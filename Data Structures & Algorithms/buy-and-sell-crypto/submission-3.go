func maxProfit(prices []int) int {
    l := 0
    r := 1
    var maxProfit int = 0;
    for r < len(prices) {
        if prices[l] > prices[r] {
            l = r
            r = r + 1
        }else{
            if maxProfit > prices[r] - prices[l] {
                r = r + 1
            } else {
                maxProfit = prices[r] - prices[l]
                r = r + 1
            } 
        }
    }
    return maxProfit
    
}
