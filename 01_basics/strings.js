const name = "safoora"
const age = 23
//console.log(name + age  +" value")// DON'T USE THIS

//USE THIS STRING INTERPOLATION --> USING BACKTRICKS --> `${}`
//console.log(`hello my name is ${name} and i am ${age} years old`);

//const gameName = new String('temple run')//object 
// if u run this in browser i.e, inspect each character shown as string and object type

// console.log(gameName[0])
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());// original value does not change it creates new string 

// console.log(gameName.charAt(2));// we have to give index
// console.log(gameName.indexOf('r'));//we have to give character single in quotes

// const newString = gameName.substring(0,4);
// console.log(newString);
// const anotherString = gameName.slice(-8,4);
// console.log(anotherString);// length - (-8) = 10-8 = 2 so 2 is the start and 4 is the end 

// const anotherNewString = "   safu  ";
// console.log(anotherNewString);
// console.log(anotherNewString.trim());

// const url = "https://safoora.com/safu%520tupakula";
// console.log(url.replace('%520','_'));
// console.log(url.includes('safoora'));

const gameName = new String('temple run')
console.log(gameName.split(' '));

