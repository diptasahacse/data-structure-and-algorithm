function isPerfectSquare(num) {
  for (let index = 1; index <= num; index++) {
    if (index * index === num) {
      return true;
    }
  }
  return false;
}
console.log(isPerfectSquare(14))