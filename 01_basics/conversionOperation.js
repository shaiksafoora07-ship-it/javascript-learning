//let score = 33;
//let score = "33"
//let score = "33abc"
let score = null
//console.log(typeof score)   //string  //if null-->object
//console.log(typeof(score))  //string    //if null-->object

            // NUMBER CONVERSION
let valueInNumber = Number(score)
//console.log(typeof valueInNumber) ;  //number if null still number
//console.log(valueInNumber) ;        //if "33" prints 33 if "33abc" prints NaN
// if null --> 0
            //BOOLEAN CONVERSION
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); //true

// 1 => true; 0 => false
// "" => false ; "safu" => true

            //STRING CONVERSION
let someNumber = 32;
let stringNumber = String(someNumber);
console.log(stringNumber);              //32
console.log(typeof stringNumber);       //string