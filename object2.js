//two ways of declaring objects
const obj1 = new Object()
const obj2 = {} // 2nd way

obj2.id = '123abc'
obj2.name = 'pekka'
obj2.isLoggedIn = false

console.log(obj2)

const obj3 = {
    email : "random@gmail.com",
    fullname: {
        userFullname: { // object inside of an object
            firstname : "nik",
            lastname : "agri",
        }
    }
}

console.log(obj3.fullname.userFullname.firstname) // if you define object inside of an object . This is the way you can access it.

// Merging of objects
const obj4 = {1: 'a', 2: 'b'}
const obj5 = {3: 'c', 4: 'd'}

//let arnew = {obj4, obj5} '1' way of merging '2' arrrays

//const obj6= Object.assign( {}, obj4, obj5) // 2nd way for merging objects

const spreadobj = {...obj4,...obj5} // here we are using spread opertor for merging object .
console.log(spreadobj)

const user = [ // here we defined objects as elemnets of array in this way we can access thrm with an index value. However 'User' will still ganna have a 'object' datatype
    {
        id : 1,
        email: 'h@mail.com'
    },
    {
        id : 1,
        email: 'h@mail.com'
    }, 
    {
        id : 1,
        email: 'h@mail.com'
    },
]

console.log(user[1].email)

console.log(Object.keys(obj3)) // to access keys inside of an object.
console.log(Object.values(obj3)) // to access values
console.log(Object.entries(obj3)) // fro entries

console.log(obj2.hasOwnProperty('isLoggedIn')) // to check whether an obbject has a certian property or not.