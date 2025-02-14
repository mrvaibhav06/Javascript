//variavble initialization

const accountId = "0133cs221217";
let accountEmail = "vaibhav@gmail.com";
var accountPassword = "12323";
accountCity = "gorkhapur";
/*
prefer not to use var 
becouse of issue in block scope and function scope
*/
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);

accountEmail = "vaiv@gmail.com";
accountPassword = "323";
accountCity = "gorkhapur";


// agar variable ki value nahi digaye toh kya???
// toh undefine value aati hai
let name;

 
console.table([accountId,name, accountEmail, accountCity, accountPassword]);
