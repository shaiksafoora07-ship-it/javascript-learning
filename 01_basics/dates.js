//NOTE : Date() is an Object in jS 




let myDate = new Date()
// console.log(myDate);     --->    2026-02-15T04:47:47.750Z
// console.log(myDate.toString());  --->    Sun Feb 15 2026 04:47:47 GMT+0000
// console.log(myDate.toDateString()); --->     Sun Feb 15 2026
// console.log(myDate.toISOString());   --->    2026-02-15T04:47:47.750Z
// console.log(myDate.toJSON());        --->    2026-02-15T04:47:47.750Z
// console.log(myDate.toLocaleDateString());    --->    2/15/2026
// console.log(myDate.toLocaleString());    --->    2/15/2026, 4:47:47 AM

//let myDate1 = new Date(23,0,30) // 0 --> month starts from zero so it takes jan
//let myDate2 = new Date(23,0,30, 5,3) // we can give values of m/d/y time
//console.log(myDate1.toDateString());     //Tue Jan 30 1923
//console.log(myDate2.toLocaleString()); // 1/30/1923, 5:03:00 AM

//let myDate3 =new Date("2025-01-15")
let myDate3 = new Date("01-14-2025");
//console.log(myDate3.toLocaleString());  //1/15/2025, 12:00:00 AM

//      ------- timeStamps -->used in quizzes,polls

let myTimeStamp = Date.now()
// console.log(myTimeStamp);   //1771132988804
// console.log(myDate3.getTime()); //1736812800000
// console.log(Math.floor(Date.now()/1000))    //1771132988

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());//1
console.log(newDate.getDay());  //0

//`${newDate.getDay()} and the time`

//here we define object 
newDate.toLocaleString(`default`,{
    weekday:"long"      //properties,we can give timezone,day 
})
