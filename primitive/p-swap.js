// swap two number without temporary variable.

// let num1 = 31;
// let num2 = 7;

// console.log(`Before swapping : num1 - ${num1}, num2 - ${num2}`);

// arithmetic operator
// num1 = num1 + num2
// num2 = num1 - num2
// num1 = num1 - num2

// multiplication & division
// num1 = num1 * num2;
// num2 = num1 / num2;
// num1 = num1 / num2;

// XOR (Bitwise)
// num1 = num1 ^ num2;
// num2 = num1 ^ num2;
// num1 = num1 ^ num2;

// Destructuring
let num1;
let num2;

[num1, num2] = [20,38,79];

[num1, num2] = [num2, num1];

console.log(`After swapping : num1 - ${num1}, num2 - ${num2}`);