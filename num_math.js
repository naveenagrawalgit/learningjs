const score = 347
console.log(score)
console.log(score.toString())//to convert number into string
// Simple way of declairing a number

/*
 AS we change a number into string we can use string methods on it also
*/
console.log(score.toString().length)// converted into string and checked the length of string

const balance = new Number(5687)
console.log(balance)//here we created an object of number
console.log(balance.toFixed(3))// it shows number of values afrer decimal point

const num2 = 24.4987
console.log(num2.toPrecision(3))// used for rounding off the value if present any.

const num3 = 100000000
console.log(num3.toLocaleString('en-IN'))// to represent numbers with " coma "

// +++++++++++++++++++ MATHS KA PART   ++++++++++++++++

console.log(Math.abs(-4)) //consverts the number into (+ve) number
console.log(Math.round(4.4))// rounds of values
console.log(Math.ceil(4.4))//chooses upper value in round off
console.log(Math.floor(4.4))//chooses lower value in round
console.log(Math.min(4,3,5,6,21,89))//to find min value in array
console.log(Math.max(4,3,5,6,21,89))//finds max value in array

//*********random method ************/
console.log(Math.random())//gives a value btwn (0,1) 0,1 included.
console.log(Math.floor(Math.random()*10) + 1)//to get a whole no. we multiply it with '10' and to avoid the '0' case we add one.

const min =10
const max =20

console.log(Math.floor(Math.random()* (max - min + 1)) + min)// to get a number in between a range
