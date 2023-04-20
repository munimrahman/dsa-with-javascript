var searchInsert = function (nums, target) {
  if (nums[nums.length - 1] < target) return nums.length;
  if (nums.length === 1) return 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (target < nums[i]) {
      return i;
    }
  }
};

// O(log n)
var searchInsertLogN = function (nums, target) {
  let low = 0;
  let high = nums.length;
  let mid;

  if (target > nums[high - 1]) return high;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    else if (target < nums[mid]) high = mid - 1;
    else low = mid + 1;
  }

  return low;
};
