const sortedArray = [2, 4, 10, 10, 10, 18, 20];
let target = 20;
// (4-2)+1
const countOfElementInBinarySearch = (mArray, target) => {
  let startIndex = 0;
  let lastIndex = mArray.length - 1;
  let mid;
  let firstResult = -1;
  let lastResult = -1;
  while (startIndex <= lastIndex) {
    mid = Math.floor((startIndex + lastIndex) / 2);
    if (mArray[mid] === target) {
      firstResult = mid;
      lastIndex = mid - 1;
    } else if (mArray[mid] < target) {
      startIndex = mid + 1;
    } else if (mArray[mid] > target) {
      lastIndex = mid - 1;
    }
  }

  startIndex = 0;
  lastIndex = mArray.length - 1;
  while (startIndex <= lastIndex) {
    mid = Math.floor((startIndex + lastIndex) / 2);
    if (mArray[mid] === target) {
      lastResult = mid;
      startIndex = mid + 1;
    } else if (mArray[mid] < target) {
      startIndex = mid + 1;
    } else if (mArray[mid] > target) {
      lastIndex = mid - 1;
    }
  }

  if (firstResult == -1 && lastResult == -1) {
    console.log(`${target} is not found.`);
  } else {
    console.log(`${target} is found ${lastResult - firstResult + 1} times`);
  }
};
countOfElementInBinarySearch(sortedArray, target);
