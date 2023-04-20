/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if (nums.length === 1) return 0;
  let max = nums[0];
  for (let i = 0; i < nums.length - 1; i++) {
    let m = Math.max(nums[i], nums[i + 1]);
    if (max < m) max = m;
  }
  return nums.indexOf(max);
};

var findPeak = function (nums) {
  const a = nums;
  const peak = Math.max(...a);
  return a.indexOf(peak);
};
