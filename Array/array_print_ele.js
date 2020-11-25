// Write a JavaScript program which prints the elements of the following array.

var testArray = [
  [1, 2, 1, 9],
  [8, 1, 9, 4],
  [7, 0, 7, "python"],
  [7, 4, "y", 14],
  [3, "x", 26, 7],
];

for (const idx in testArray) {
  console.log(`Row - ${idx}`);
  for (const j in testArray[idx]) {
    console.log(`${testArray[idx][j]}`);
  }
}
