// Write a JavaScript program to find the most frequent item of an array

const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9];
let count = 1;
let tempCount = 0;
let item;

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr1.length; j++) {
    if (arr1[i] === arr1[j]) tempCount++;
    if (count < tempCount) {
      count = tempCount;
      item = arr1[i];
    }
  }
  tempCount = 0;
}

console.log(`${item} - ${count} times`);
