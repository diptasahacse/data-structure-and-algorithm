function missingNumber(numsArray) {
  let sum1 = 0;
  let sum2 = 0;
  for (let index = 0; index <= numsArray.length; index++) {
    sum1 = sum1 + index;
  }
  for (let index = 0; index < numsArray.length; index++) {
    sum2 = sum2 + numsArray[index];
  }
  return sum1 - sum2;
}

console.log(missingNumber([1, 3, 4, 5, 0]));
