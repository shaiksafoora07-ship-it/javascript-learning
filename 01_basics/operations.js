// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(4/3);
// console.log(2%7);

let str1 = "hello";
let str2 = " safoora";

let str3 = str1+str2;
console.log(str3);


//DON'T DO THIS
// console.log("1"+2);//12
// console.log(2+"1");//21
// console.log(1+2+"2");//32
// console.log("1"+2+2);//122

// console.log(true)//true
// console.log(+true);// 1//conversion happen
// console.log(+"")//0

//AVOID THIS TYPE OF CONVERSION THEY WILL CONFUSE YOU
console.log(null>0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined >0);
console.log(undefined == 0);
console.log(undefined < 0);

// ===  //strict comparision
console.log("2" === 2);
