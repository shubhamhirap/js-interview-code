// Write a JavaScript program to sort the items of an array.

var arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
// var arr1 = [1, 4, 8, 7, 9, 5, 6, 21, 0, 4, 8, 4, 7];
// var arr1 = [];
var arr2 = [];
var min = arr1[0];
console.log(min);
var pos;
var max = arr1[0];
console.log(max);
for (let i = 0; i < arr1.length; i++) {
  if (max < arr1[i]) max = arr1[i];
}
for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr1.length; j++) {
    if (arr1[j] != "x") {
      if (min > arr1[j]) {
        min = arr1[j];
        pos = j;
      }
    }
  }
  arr2[i] = min;
  arr1[pos] = "x";
  min = max;
}

console.log(arr2);
