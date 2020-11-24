// Write a JavaScript function to get the last element of an array.
// Passing a parameter 'n' will return the last 'n' elements of the array

const array_last = (arr, n) => {
  if (arr == null) return void 0;
  if (n == null) return arr[arr.length - 1];
  return arr.slice(Math.max(arr.length - n, 0));
};

console.log(array_last([1, 2, 3, 4]));

console.log(array_last([7, 9, 0, -2]));
console.log(array_last([7, 9, 0, -2], 3));
console.log(array_last([7, 9, 0, -2], 6));
