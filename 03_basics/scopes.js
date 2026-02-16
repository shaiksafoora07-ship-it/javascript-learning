//global scope
let a =300


if(true){       //block scope
    let a =10;
    const b = 20;
    var c = 30;
    //console.log("inner ",a);    //10
}
//console.log(a); //a is not defined //prints global scope value -300
//console.log(b); //b is not defined
//console.log(c); //prints 30

//NOTE -- global scope is different in code environment and inspect in browser

function one(){
    const username ="safu"
    function two() {
        const website = "utube"
        console.log(username)
    }
    //console.log(website)//website is not defined error cuz it is in block 
    two()
}
//one()

if(true){
    const username ="hitesh"
    if(username === "hitesh"){
        const website = " utube"
       // console.log(username+website);

    }
    //console.log(website);//gives error only accessible in if block
}
//console.log(username);//accesible if it is in global scope but it is in if block so not accesible


//-------------- imp-------------------------

console.log(addOne(5)) //even if we print before function still prints
function addOne (num){
    return num+1
}
//addOne(5)    //return the value but does not print it

console.log(addTwo(5))  // we get error for this function--cannot access 'addTwo' before initializing
const addTwo = function(num){
    return num+2
}
//addTwo(5)