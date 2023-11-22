// datatype :- Symbol

const sym = Symbol('key1')

const sym2 = Symbol('key2')

const usr1 = { // object
    name : 'hitesh', // system proceses 'Key' as a string .
    age : 12,
    location : 'RBGRTG',
    isLoggedIn : false,
    arr : ['rgsrv','rgrtg'],
    'full name': 'hitesh chaudhary' ,// you can also define 'key' as a string 
    
    sym: 'mykwy1',
    [sym2] : 'mykwy2',
}
console.log(usr1.name);
console.log(usr1["location"]) // another way of accessing a 'key:value pair' 
console.log(usr1['full name']) // if you have given 'Key' as a string then this is the only way to access it.
console.log(usr1.sym) // if you access variable with 'Symbol' data type . then it will have the datatype of same as of the literal and not of 'symbol'

// to make 'symbol' as a datatype of a literal you must encolse the key in '[]' during difining stage. 
console.log(usr1[sym2])

usr1.location = 'khair' 
//Object.freeze(usr1)
usr1.location = 'aligarh'
console.log(usr1)

usr1.greeting = function(){
    console.log('helio')
}

usr1.greeting2 = function(){
    console.log(` greeting2, ${this.name} `)// when you have to refrence the same object we use 'this'
}
console.log(usr1.greeting())  
console.log(usr1.greeting2())
