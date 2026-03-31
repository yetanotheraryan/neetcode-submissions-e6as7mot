func twoSum(nums []int, target int) []int {
    var m map[int]int = make(map[int]int)
    var result []int
    for i, v := range nums {
        
        val, ok := m[v];
        if ok == true {
            result = []int{val, i}
        }else{
            // set complement and index in map
            var complement int = target - v
            m[complement] = i 

        }
    }
    return result
    
}


// plan
// {
//     complement: firstIndex
// }