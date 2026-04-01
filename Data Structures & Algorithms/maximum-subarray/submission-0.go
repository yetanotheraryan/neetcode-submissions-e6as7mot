func maxSubArray(nums []int) int {
    maxSub := nums[0]
    currSum := 0

    for _, v := range nums {
        if currSum < 0 {
            currSum = 0
        }
        currSum += v
        maxSub = max(maxSub, currSum)
    }
    return maxSub
}
