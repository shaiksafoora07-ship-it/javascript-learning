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
//console.log(loginUser())  //---  IF WE DOES NOT GIVE ANY VALUE , ---> UNDEFINED //to check use if  

function calculateCartPrice(num1){
    return num1
}
//console.log(calculateCartPrice(2,200,300))// it prints only one element toget all use (...)
function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(100,399,419));
function calculateCartPrice(val1,val2,...num1){
    return num1
}
//console.log(calculateCartPrice(2,3,4,4,5,5)) //--2 is val1, 3 is val2 so other prints cuz we return num1 only

//PASSING OBJECTS IN FUNCTIONS
const user = {
    username : "safoora",
    price : "199"
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
//handleObject(user)
//direct passing the object
handleObject({
    username : "safura",
    price:"200"
})

//PASSING ARRAYS IN FUNCTIONS
const myArray = [300,700,500,6000]
function secondValue(getArray){
return getArray[1]
}
//console.log(secondValue(myArray))
//passing direct array
console.log(secondValue([200,300,400,499]))