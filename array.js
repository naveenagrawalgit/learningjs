//**************** */ Arrays ***************

const arr = [2,54,15,6,7634,46,3,343,570,88,98,98]
const ar1 = ['gtrsg','srgs','srggs']
console.log(ar1[2])
console.log(arr.length)
//arrays are resizable in js.

//another way of declairing an array
const ar2 = new Array(1,2,2,45,46,23,2)
console.log(ar2[3])

//methos in array
ar2.push(9) // insert element at end of the array
console.log(ar2)
ar2.pop() // removews last element

ar2.unshift(3) // adds element at starting of array 'by shifting all elements nby one place,
ar2.shift() // removes element at starting of an array 
console.log(ar2.includes(4)) // to check whether certain element is in array or not 'here we are checking for (4)'
console.log(ar2.indexOf(3)) //prints index of element innside array

const newar2 =  ar2.join() // converts array into a string

console.log(newar2)
console.log(ar2)

// +++++++++++++++'slice || splice' +++++++++//
console.log(`a :--- ${ar2}`)

const ar3 = ar2.slice(1,3)
console.log(ar3)
console.log(`origianl array after slice method ${ar2}`) // there is no change in original array after slice method
console.log(`b :--- ${ar2}`)

const ar4 = ar2.splice(1,3)

console.log(ar4)
console.log(`original array after splice methode ${ar2}`) //the no. of indexes we pass in splice , Elements at that postion are removed from original array in splice.