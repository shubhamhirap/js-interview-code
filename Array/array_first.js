// Write a JavaScript function to get the first element of an array.
// Passing a parameter 'n' will return the first 'n' elements of the array

const first_elem = (arr, n = 1) => {
  return arr.splice(0, n);
};

console.log(first_elem([1, 2, 3, 6]));
console.log(first_elem([4, 5, 6, 7, 8, 9], 4));
