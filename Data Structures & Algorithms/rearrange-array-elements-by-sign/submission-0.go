func rearrangeArray(nums []int) []int {
    p := []int{}
	n := []int{}
    r := []int{}
	for _, v := range nums {
		if(v < 0){
			n = append(n, v)
		}else if (v >= 0){
			p = append(p, v)
		}
	}	

    for i := range len(nums)/2 {
        r = append(r, p[i])
        r = append(r, n[i])
    }

    return r

	fmt.Println(p, n)
	return p
}
