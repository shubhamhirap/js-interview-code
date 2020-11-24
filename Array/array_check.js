// Write a JavaScript function to check whether an `input` is an array or not

const is_array = (arr) => {
  return toString.call(arr) === "[object Array]" ? true : false;
};

console.log(is_array([1, 2, 3]));
console.log(is_array("here"));
