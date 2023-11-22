//Destructuring of objects and json API
// json :- js object notation
const course = {
    coursename : ' js in hindi',
    price : 999,
    courseInstructor : 'hiteshchaudhary',
}

const {courseInstructor} = course // this is an easier way of accessing a 'key-value' . By this we don't have to use '.' operator to access 'object' 'keys' .
console.log(courseInstructor)

const {coursename : name} = course // in this way we can also give a new name to the key
console.log(name)
 