/*
To implement binary search, I must need a sorted array. It can be ascending or descending order.
*/
// Let's see,
let target = 400;
const myArray = [100, 103, 110, 150, 188, 199, 210, 345, 400, 788];
// Means, for that array index are [0,1,2,3,4,5,6,7,8,9]

const ascendingSortedBinarySearch = (arr, target) => {
  // I need start index, end index and middle index
  let startIndex = 0; // initially
  let lastIndex = arr.length - 1; // = 9 initially
  let middleIndex;
  while (startIndex <= lastIndex) {
    middleIndex = Math.floor((startIndex + lastIndex) / 2); // = (0+9)/2 = 4.5 => 4
    if (arr[middleIndex] === target) {
      return `${target} is found at index ${middleIndex}.`;
    } else if (arr[middleIndex] < target) {
      startIndex = middleIndex + 1;
    } else if (arr[middleIndex] > target) {
      lastIndex = middleIndex - 1;
    }
  }
  return `${target} is not found.`;
};

console.log(ascendingSortedBinarySearch(myArray, target));
