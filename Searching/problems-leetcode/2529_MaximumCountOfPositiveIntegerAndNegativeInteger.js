function maximumCount(nums) {
  let pos = 0;
  let neg = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] > 0) {
      pos++;
    }
    if (nums[index] < 0) {
      neg++;
    }
  }
  if (pos === neg) {
    return pos;
  }
  if (pos > neg) {
    return pos;
  } else {
    return neg;
  }
}
