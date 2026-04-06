func singleNonDuplicate(nums []int) int {
	l := 0	
	r := len(nums) - 1
	
	for l < r {
		mid:=(l+r)/2

		if (mid - 1 < 0 || nums[mid-1] != nums[mid]) && (mid+1 == len(nums) || nums[mid+1] != nums[mid]){
			return nums[mid]
		} 

		var leftSize int
		if nums[mid - 1] == nums[mid] {
			leftSize = mid -1
		}else {
			leftSize = mid
		}


		if leftSize % 2 == 1 {
			r = mid - 1
		}else {
			l = mid + 1
		}

	}

	return nums[l]
}

// [1,1,2,3,3,4,4,5,5]
