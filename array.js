//parenthisis=>(((((((((())))))))))
//  curli bracket{{{{{{{{{}}}}}}}}}
// squre bracket [[[[[[[[[]]]]]]]]]

//Array =============

// const myA = [1, 2, 3, 4, 5];
// const myA = [1, 2, 3, 4, 5, `aniket, vaibhav, kushwaha, kalindi, indraman`];
// // console.log(myA);

//const arr = new Array(1, 23, 332, 445);
// console.log(arr[3]);

//ARRAYmethod========
// arr.push(4); //[ 1, 23, 332, 445, 4 ]/// insert karte value ko
// arr.push(232);//[ 1, 23, 332, 445, 4, 232
// arr.pop();
// arr.unshift(12);
// arr.shift();

// console.log( arr);
// const arr1 = arr.slice(1, 3);  //1,3, ke bich ka slice ninalta hai jishe ushka tukdha bolte hai
// console.log("A",arr1);

// const arr2 = arr.splice(1, 3);// 1,3 value arr se nikal jati ahi splice me
// console.log("A",arr2);

//part 2================+++

const heros = ["batman", "superman", "spiderman"];
const heross = ["bat", "supe ", " rman"];
// heros.push(heross);//[ 'batman', 'superman', 'spiderman', [ 'bat', 'supe ', ' rman' ] ]
const allhero = heros.concat(heross); ///[ 'batman', 'superman', 'spiderman', 'bat', 'supe ', ' rman' ]
console.log(allhero);

const name = [1, 2, (3)[(2, 3, 4, [5, 4, 5])]];
const realName = name.flat(Infinity);
console.log(realName);
