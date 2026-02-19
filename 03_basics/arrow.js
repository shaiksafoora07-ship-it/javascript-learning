// const user = {
//     username: "safoora",
//     price :"90",

//     welcomeMsg : function(){
//         console.log(`${this.username}, welcome to website`);//to refer current context we use this keyword
//         console.log(this);//gives output
//     }
// }
// user.welcomeMsg();
// //user name change 
// user.username = "sam"
// user.welcomeMsg();
//console.log(this)//in global context does not have anything so it prints empty in node environment


//in node environment global is Object
// function fun(){
//     console.log(this);//we get global value and some more values we get 
// }
// fun()

// function fun1(){
//     let username = "safu"
//     console.log(this.username);//we get undefined because use in function, we have to define the value in object 
// }
// fun1();

// const fun = function(){
//     let username = "safu"
//     console.log(this.username);
// }
// fun();//undefined


// const fun = ()=>{
//     let username = "safu"
//     console.log(this.username)//undefined
//     console.log(this)//{}
// }
// fun()

// const addTwo =(num1,num2) =>{
// return num1+num2
// }
// console.log(addTwo(3,4));

//implicit return --no need of paranthesis and no need return stmt
//const addTwo =(num1,num2) => num1+num2
//const addTwo1 =(num1,num2) => (num1+num2)
//const addTwo1 =(num1,num2) => {username: "safoora"}
//undefined so wrapp up ({})
const addTwo1 =(num1,num2) => ({username: "safoora"})//prints
console.log(addTwo1(3,4));