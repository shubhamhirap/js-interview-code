//show the different ways of concatenating numbers and string

const num = 25;
const str = "years old."

//template string
console.log(`${num} ${str}`);

//conventional concatenating
console.log(num+ " " +str); 

//array join
const res = [num, ' ' , str].join('');
console.log(res);

//str concat
const who = "I'm"; 
console.log(who.concat(' ', num, " ", str))