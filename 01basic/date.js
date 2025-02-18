let myDate = new Date();
//console.log(myDate.toString());    ///2025-02-18T06:48:53.815Z
//console.log(myDate.toDateString());     //Tue Feb 18 2025
//console.log(myDate.toISOString());   //2025-02-18T06:52:32.470Z
// console.log(myDate.toLocaleString());  //18/2/2025, 12:23:06 pm
//console.log(myDate.toLocaleTimeString());   //12:23:54 pm
//console.log(myDate.toJSON());    //2025-02-18T06:54:49.690Z
//console.log(typeof myDate);  //Obeject

let myCreateDate = new Date(2023, 0, 13);

//console.log(myCreateDate.toLocaleString()); //13/1/2023, 12:00:00 am
//console.log(myCreateDate.getTime());

const myTimeStamp = Date.now();
//console.log(myTimeStamp);
console.log(Math.floor(Date.now() / 1000));
