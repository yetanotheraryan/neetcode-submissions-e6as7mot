func searchRange(nums []int, target int) []int {
	left := binarySearch(nums, target, true)
	right := binarySearch(nums, target, false)
	return []int{left, right}
}

func binarySearch(nums []int, target int, leftBias bool) int {
	l := 0
	r := len(nums) - 1
	i := -1
	for l <= r {
		m := (l + r)/2

		if nums[m] > target {
			r = m - 1
		} else if nums[m] < target {
			l = m + 1
		} else {
			i = m
			if leftBias == true {
				r = m - 1
			} else {
				l = m + 1
			}
		}
	}
	return i
}