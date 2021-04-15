let firstArr = [1, 2, 3, 4, 5, 6];
let secondArr = [5, 6, 7, 8, 9];

function diff(array1, array2) {
  // Write a function that takes in two arrays.
  // Return a new array that has the values that
  // are only in the first array.
  let newArr = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      // console.log(firstArr[i])
    } else {
      newArr.push(array1[i]);
    }
  }
  for (let i = 0; i < array2.length; i++) {
    if (array1.includes(array2[i])) {
      // console.log(firstArr[i])
    } else {
      newArr.push(array2[i]);
    }
  }
  return newArr;
}

console.log(diff(firstArr, secondArr));
