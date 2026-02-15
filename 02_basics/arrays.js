const arr = [1,2,3,4,5];
//array is zero-based index 
//create shallow-copies -->share the reference point
//deep copy --> does not share the reference point
//DECLARATION ARRAY
const arr1 = ["safu","safoora"]
const arr2 = new Array(1,2,3,4);

//METHODS
// arr.push(6)             
// arr.push(7);
// arr.pop();  //removes last element i.e, 7

// arr.unshift(9); //inserts at start ,shifting of elements happen
// arr.shift()
// console.log(arr.includes(9));//gives boolean value true /false
// console.log(arr.indexOf(3));//if number exists gives index if  not exists gives -1

// const newArr = arr.join()
// console.log(arr)   // [1,2,3,4,5]
// console.log(newArr) // 1,2,,3,4,5   //converted into string 
// console.log(typeof arr)     //object 
// console.log(typeof newArr)  //string 

// console.log("A ",arr)
// const myn1 = arr.slice(1,3);    
// console.log(myn1)       [2,3]

// console.log("B ",arr)
// const myn2 = arr.splice(1,3);
// console.log(myn2);      [2,3,4]

const marvel_heroes = ["ironman","spiderman","thor"]
const dc = ["flashman","batman","superman"]
//marvel_heroes.push(dc)      //prints in existing array
// console.log(marvel_heroes); 
// console.log(marvel_heroes[3][1]);

//CONCAT()
// const allHeroes = marvel_heroes.concat(dc)
// console.log(allHeroes); //creates a new array

//CONCAT() AND [...ELE1] PRINTS SAME OUTPUT BY USING SPREAD OPERATOR WE CAN GIVE N NUMBERS AND COMBINE ALL
//SPREAD OPERATOR ----> [...ele1,...ele2,...ele3......]
const all_heroes = [...marvel_heroes,...dc]
//console.log(all_heroes);

const an_arr = [1,2,3,[4,5], 6,[7,8,[4,5]]]
const real_an_arr = an_arr.flat(Infinity)   //returns all subarrays into single array
//console.log(real_an_arr);

//console.log(Array.isArray("Safoora"))
//Array.from(?) --> ? any string,object converts into array
//console.log(Array.from("safoora"))
//console.log(Array.from({name:"safoora"}))//give empty--[] , we have to give as key array

//Array.of() --- returns a new array from set of elements
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));    //[100,200,300]