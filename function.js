/* 
^ when we are defining a function ans I/P that are taken in it are 'parameters'

^ Values which are passed during the calling of a function are 'ARGUMENTS'
*/
function fun () {

    console.log("n")
    console.log("i")
}
// ^ In below statement "fun" means refrence of the function and "()" means execution of the function. and as we use "fun()" this means we are calling the function.
fun//this will not give an error.
fun()

function addTwoNumber(num1, num2) {
   console.log( num1 + num2)// as in this function we are not returning any value ,so if we store the calling method in a variable , it won't hold any value in it.
}

const result =  addTwoNumber( 2 , 5 )
console.log(result) 

function two (n){
     
     return `${n} random`
    console.log("won't return")// as this is written below the return statement. this is not executing
}
let na = two(3)//now 'name will get value in it from 'two()' 
console.log(na)

function CalculatePrize(...num){//'...num' the three '...' are 'rest' operator here.It will fuse all the elements in '1' 
    return num
}

console.log(CalculatePrize(200,300,400))

// object and function +++++++
const user ={ // object
    username : 'hitesh',
    price: 122,
}

function handleObject(anyObj){ // function taking object as parameter
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}
handleObject(user)// here we're passing object as an arguement
/* Or we could have passed object directly as an argument without defining it any where else

^ handleObject(
    { // object
    username : 'hitesh',
    price: 122,
}
)
*/

const myArray = [200,300,400,700]

function returnSecondValue(getArray){
    return getArray[1]// element of array is getting accessed by its Index
}
console.log(returnSecondValue(myArray))//passinng array
