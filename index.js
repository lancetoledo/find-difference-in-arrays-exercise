let firstArr = [1, 2, 3, 4, 5, 6];
let secondArr = [5, 6, 7, 8, 9];

function diff(array1, array2) {
  // Write a function that takes in two arrays.
  // Return a new array that has the values that
  // are only in the first array.
  let newArr = [];
  for (let i = 0; i < array1.length; i++) {
    if (secondArr.includes(firstArr[i])) {
      // console.log(firstArr[i])
    } else {
      newArr.push(firstArr[i]);
    }
  }
  return newArr;
}

console.log(diff(firstArr, secondArr));
