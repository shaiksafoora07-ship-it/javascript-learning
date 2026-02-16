const course ={
    coursename : "js",
    price : "999",
    courseInstructor : "hitesh"
}
const {courseInstructor} = course
console.log(courseInstructor);
//Object de-structure
const {courseInstructor : instructor} = course
console.log(courseInstructor) 

//JSON -  json object{ "": ""}  json arr[{},{},{}]

// {
//     "name" : "saf",
//     "coursename" : "js",
//     "fees" : "free"
// }

[
    {},
    {},
    {}
]