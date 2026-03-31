func hasDuplicate(nums []int) bool {
    var m map[int]int = make(map[int]int)
    for _, v := range nums {
        m[v]++
        if m[v] == 2{
            return true
        }
    }

    return false
}
