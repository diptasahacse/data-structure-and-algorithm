function getCommon(nums1, nums2) {
  if (nums1.length >= nums2.length) {
    for (let i = 0; i < nums1.length; i++) {
      for (let j = 0; j < nums2.length; j++) {
        if (nums1[i] === nums2[j]) {
          return nums1[i];
        }
      }
    }
  } else if (nums1.length < nums2.length) {
    for (let i = 0; i < nums2.length; i++) {
      for (let j = 0; j < nums1.length; j++) {
        if (nums2[i] === nums1[j]) {
          return nums2[i];
        }
      }
    }
  }
  return -1;
}

console.log(getCommon([1, 2, 3, 6], [2, 3, 4, 5]));
