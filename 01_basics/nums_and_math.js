const num = 100;
// console.log(num);
const num1 = new Number(100)
// console.log(num1);//[Number: 100] 
// console.log(num1.toString().length);// if u just print without toString then u don't get the length 
//num1.length--> Undefined
// console.log(num1.toFixed);  //[Function: toFixed]
// console.log(num1.toFixed(1));//100.0 if 2 -->100.00

const num2 = 123.8443       //by giving precision 124
const num3 = 123.3443       // 123
// console.log(num2.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));// gives in indian standard way (use ,)

// -------------------MATHS(library)-------------------
// console.log(Math);  //Object [Math] {}
// console.log(Math.abs(-4));  //changes -value to +value
// console.log(Math.round(4.3)) //4 if 4.6 -> 5
// console.log(Math.ceil(4.3)) // gives upper value i.e, 5 even after .1 is still it gives 5
// console.log(Math.floor(4.9))// 4
// console.log(Math.min(2,8,4,9)) //2
// console.log(Math.max(87,2,24,23)) // 87


//------------where we use Math -----------
console.log(Math.random());//gives random values between 0 and 1 in decimals only 
console.log((Math.random()*10 )+1);
// we don't 0 or 0.000 so we add +1, so it will give more then 1  or 1

console.log(Math.floor(Math.random()*10)+1);//using floor we only get one value without decimals
//here also we use floor and added 1 to not get 0.____
const min = 10;
const  max = 20;
console.log(Math.floor(Math.random()*(max - min +1))+min);