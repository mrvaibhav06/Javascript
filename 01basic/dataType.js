// we are using node.js not browser
//tc39.es this site is the real documentation

let name = "vaibhav"; //string type dataType
let age = 22; //numertype dataTYPE
let bool = false; // boolTYPE DATATYPE
let state; // undifine dataType
let cuntry = null; //standalone value

null; //null ka typeof kya hai => object hai
undefined; //undefined ka typeof kya hai => undefined hai

//important::::

//javascript is indeed dynamic programing language
/*
javascript is types:
1. primitive :ther are seven type:String ,Number, Boolean, null, undefined, symol
    bigInt

2. Reference  (non-primitive): Array , Object Function   
//Reference ka datatype object hi hota hai kisi ka bhi



*/

//Array
const heros = ["saktiman", "naagraj", "doga"];
//object
let muObj = {
  name: "vaibhav",
  age: 12,
  class: "btech",
};

//function
const myFunction = function () {
  console.log("hello Word");
};

console.log(muObj);
console.log(heros);
console.log(typeof heros);

//=========================================

//memory are the two type
//  1.stack(primitive )=>stack me copy value milta hai
// 2. Heap(non-primitive)=> heap me copy value nahi milti hai

let myName = "Vaibhav";
let anotherName = myName;
anotherName = "Golu";
console.log(myName);
console.log(anotherName);

let raj = {
  email: "qwe33@gmail.com",
  upi: "upi@ewe434",
};
let rohan = raj;
rohan.email = "rohan@2233gmail,com";

console.log(raj.email);
console.log(rohan.email);
