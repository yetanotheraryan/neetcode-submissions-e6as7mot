func subarraySum(nums []int, k int) int {
    var prefix = map[int]int{0: 1}
    sum := 0
    result:=0
    for _, v := range nums {
        sum += v
        val, ok := prefix[sum - k]
        if ok == true {
            result += val
            prefix[sum]++
        }else{
            prefix[sum]++
        }
    }
    return result
}
