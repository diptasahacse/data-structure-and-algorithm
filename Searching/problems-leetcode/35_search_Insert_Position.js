let target = 0;
const myArray = [-10,1, 3, 5, 6];

const ascendingSortedBinarySearch = (arr, target) => {
  let startIndex = 0;
  let lastIndex = arr.length - 1;
  let middleIndex;
  while (startIndex <= lastIndex) {
    middleIndex = Math.floor((startIndex + lastIndex) / 2);
    if (arr[middleIndex] === target) {
      return middleIndex;
    } else if (arr[middleIndex] < target) {
      startIndex = middleIndex + 1;
    } else if (arr[middleIndex] > target) {
      lastIndex = middleIndex - 1;
    }
  }
  if (middleIndex == lastIndex) {
    return middleIndex + 1;
  }
  return middleIndex;
};

console.log(ascendingSortedBinarySearch(myArray, target));
