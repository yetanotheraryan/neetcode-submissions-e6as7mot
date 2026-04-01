func sortColors(nums []int) {
    m := map[int]int{}
    for _, v := range nums {
        m[v]++
    }

    fmt.Println(m)
    count:=0
    for _, color := range []int{0, 1, 2} {
        for j:=0; j < m[color]; j++ {
            // fmt.Println(color, j)
            
            nums[count] = color
            count++
        }
    }

}
