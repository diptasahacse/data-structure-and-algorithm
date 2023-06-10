const myArray = [122, 2, 4, 5, 6, 8, 12, 55, 33, 66, 44, 88]; // unsorted array
const target = 2;

const linearSearch = (arr, target) => {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === target) {
      return `${target} value is found at index ${index}.`;
    }
  }
  return `${target} is not found.`;
};

console.log(linearSearch(myArray, target));
