const sortedArray = [2, 4, 10, 10, 10, 18,18,18, 20];
let target = 7;

const lastElementOccurrenceBinarySearch = (mArray, target) => {
  let startIndex = 0;
  let lastIndex = mArray.length - 1;
  let mid;
  let result = -1;
  while (startIndex <= lastIndex) {
    mid = Math.floor((startIndex + lastIndex) / 2);
    if (mArray[mid] === target) {
      result = mid;
      startIndex = mid + 1;
    } else if (mArray[mid] < target) {
      startIndex = mid + 1;
    } else if (mArray[mid] > target) {
      lastIndex = mid - 1;
    }
  }
  if (result == -1) {
    console.log(`${target} is not found.`);
  } else {
    console.log(`${target} is found at ${result}`);
  }
};
lastElementOccurrenceBinarySearch(sortedArray, target);
