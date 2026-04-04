/** 
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * func guess(num int) int;
 */

func guessNumber(n int) int {
    l:=1
	h:=n
	result := -1
	for l <= h {
		mid := (l+h)/2
		numheat := guess(mid)
		fmt.Println(numheat)
		if numheat == 0 {
			return mid	
		} else if numheat == 1 {
			l = mid + 1
			fmt.Println("l", l)
		} else {
			h = mid - 1
		}

	}

	return result
}
