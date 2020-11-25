// Write a JavaScript program which accept a string as input and swap the case of each character.

var str = "Here I am";
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const result = [];

for (let i = 0; i < str.length; i++) {
  if (UPPER.includes(str[i])) {
    result.push(str[i].toLowerCase());
  } else if (LOWER.includes(str[i])) {
    result.push(str[i].toUpperCase());
  } else {
    result.push(str[i]);
  }
}

console.log(result.join(""));
