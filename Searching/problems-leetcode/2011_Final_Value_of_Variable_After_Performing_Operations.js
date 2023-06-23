function finalValueAfterOperations(operations) {
  let X = 0;

  for (let index = 0; index < operations.length; index++) {
    if (operations[index].slice(-2) == "++") {
      X++;
      console.log('[index].slice(-2) == "++"');
    }
    if (operations[index].slice(-2) == "--") {
      X--;
      console.log('[index].slice(-2) == "--"');
    }
    if (operations[index].slice(0, 2) == "++") {
      ++X;
      console.log('[index].slice(0, -2) == "++"');
    }
    if (operations[index].slice(0, 2) == "--") {
      --X;
      console.log('[index].slice(0, -2) == "--"');
    }
  }
  return X;
}
console.log(finalValueAfterOperations(["--X","X++","X++"]));
