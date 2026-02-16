function twoNumb(num1,num2){
console.log(num1+num2)
}
// twoNumb()   //NaN
// twoNumb(2,3) //5
// const result = twoNumb(9,5)
// console.log(result) //undefined  // it does not returning any thing 

function add(num1,num2){
    // let result = num1+num2
    // return result;

    return num1+num2
    //if u write any code ,console here after return it does not print anything 
}
const result = add(76,98);// does not print any output we have to store it
//console.log(result)

function loginUser(username){
    //or if(!username)
    if(username===undefined) {
        console.log("please enter a username")
        return 
    }
    return `${username} just logged in`
}
//console.log(loginUser("safoora"))
console.log(loginUser())  //---  IF WE DOES NOT GIVE ANY VALUE , ---> UNDEFINED //to check use if  
