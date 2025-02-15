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
