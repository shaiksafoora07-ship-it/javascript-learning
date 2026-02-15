//const user = new Object()   //singleton object

const user1 = {}            //non-singleton object
user1.id ="12ab"
user1.name = "safu"
user1.isLoggedIn = false
//console.log(user1)

//NESTED object
const regularUser ={
    email:"safu@gmail.com",
    userfullname :{
        fullname:{
            firstname:"safoora",
            lastname:"sk"
        }
    }
}
//console.log(regularUser.userfullname)
//console.log(regularUser.userfullname.fullname.firstname)//safoora

//merging or combining objects
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
//const obj3 = Object.assign({},obj1,obj2)//{}--treated as target or copy's  all ele keys and pairs
const obj3 = {...obj1,...obj2}
//console.log(obj3)


//ARRAY WITH N NO.OF OBJECTS    
const users = [
    {
        id:1,
        name:"safu"
    },
    {
        id:1,
        name:"safu"
    },
    {
        id:1,
        name:"safu"
    }
]
//users.name[1]
// console.log(Object.keys(user1))// return in array so we can use loop
// console.log(Object.values(user1))
// console.log(Object.entries(user1))

//TO KNOW THE VALUE OR PROPERTY IS PRESENT OR NOT 
console.log(user1.hasOwnProperty('isLoggedIn'));//true ,if value or property does not exist gives FALSE