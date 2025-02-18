//   conversion and opration

let age = 22;
let score = "22";
console.log(typeof age); // number type hai
console.log(typeof score); // string type hai

let width = Number(score);
console.log(typeof width);
console.log(width);

/*
if we take number like =>  22=>22
                          "22qwwe"=> NaN
                          true=>1
                          false=>0

*/
let someNumber = 22;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

let value = 3;
let negative = -value;
console.log(negative);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 2);

//if we want to add string so what
let str1 = "hello";
let str2 = "vaibhav";
let str3 = str1 + str2;
console.log(str3);
