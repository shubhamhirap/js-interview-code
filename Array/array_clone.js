// Write a JavaScript function to clone an array

const array_Clone = (arr) => {
  return arr.slice(0);
};
let input_array = [7, 8, 9, 5, [6, 4]];
console.log(array_Clone(input_array));
console.log(input_array);
