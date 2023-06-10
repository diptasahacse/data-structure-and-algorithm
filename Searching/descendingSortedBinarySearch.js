let target = 188;
const myArray = [788, 400, 345, 210, 199, 188, 150, 110, 103, 100];
// Means, for that array index are [0,1,2,3,4,5,6,7,8,9]
const descendingSortedBinarySearch = (arr, target) => {
  let startIndex = 0; // initially
  let lastIndex = arr.length - 1; // = 9 initially
  let middleIndex;
  while (startIndex <= lastIndex) {
    middleIndex = Math.floor((startIndex + lastIndex) / 2); // = (0+9)/2 = 4.5 => 4
    if (arr[middleIndex] === target) {
      return `${target} is found at index ${middleIndex}.`;
    } else if (arr[middleIndex] > target) {
      startIndex = middleIndex + 1;
    } else if (arr[middleIndex] < target) {
      lastIndex = middleIndex - 1;
    }
  }
  return `${target} is not found.`;
};

console.log(descendingSortedBinarySearch(myArray, target));
