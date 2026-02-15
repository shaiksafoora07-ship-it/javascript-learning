//OBJECT LITERALS
const mySym = Symbol("key") //Symbol data type ,so it should return symbol
const  user ={
    //mySym:"key1",   //symbol key  value it does not return 'Symbol'data type 
    [mySym] : "key1",
    name : "safoora",
    age : 23,
    email : "safoora@gmail.com",
    location : "bengaluru",
    isLoggedIn : false,
    LastLoginDate : ["monday","saturday"] 
}
//access using .notation
console.log(user.email)
console.log(user["email"])
console.log(user[mySym])  
console.log(typeof user[mySym])
//change the values
user.email = "safu@gmail.com"

//freeze the values 
Object.freeze(user)// after this value does not change
// user.email = "safuuuu@google.com"
// console.log(user);


user.greeting = function(){
    return "hello user";
}
console.log(user.greeting());