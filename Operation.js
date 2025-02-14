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
