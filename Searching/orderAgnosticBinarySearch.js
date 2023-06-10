const myAscArray = [100, 103, 110, 150, 188, 199, 210, 345, 400, 788];
const myDescArray = [788, 400, 345, 210, 199, 188, 150, 110, 103, 100];
let target = 110;
const orderAgnosticBinarySearch = (arr, target) => {
  let startIndex = 0; // initially
  let lastIndex = arr.length - 1; // = 9 initially
  let middleIndex;

  while (startIndex <= lastIndex) {
    middleIndex = Math.floor((startIndex + lastIndex) / 2);
    if (arr[middleIndex] === target) {
      return `${target} is found at index ${middleIndex}.`;
    } else if (
      arr[0] <= arr[arr.length - 1]
        ? arr[middleIndex] < target
        : arr[middleIndex] > target
    ) {
      startIndex = middleIndex + 1;
    } else if (
      arr[0] <= arr[arr.length - 1]
        ? arr[middleIndex] > target
        : arr[middleIndex] < target
    ) {
      lastIndex = middleIndex - 1;
    }
  }
  return `${target} is not found.`;
};

console.log(orderAgnosticBinarySearch(myAscArray, target));
