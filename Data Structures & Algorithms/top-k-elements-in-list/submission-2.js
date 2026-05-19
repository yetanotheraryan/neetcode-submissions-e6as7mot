class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // need top elements by frequency.
        let m = {};
        let r = [];
        for (let i of nums) {
            if (!m[i]) {
                m[i] = 1;
            } else {
                m[i]++;
            }

            console.log("nums frq obj", m);
        }

        return Object.entries(m)
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(([num]) => Number(num));;
    }
}
