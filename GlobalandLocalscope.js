let a = 300 // global scoped 'a' and 'c'
let c =23 

if(true){ // block scoped 'a'
    let a = 30
    console.log('inner : - ',c);// a global scoped varaible is accessable even inside a local scope. but not same for a local scoped variable.
    const n = 2
    console.log('inner a : - ', a);
}
console.log(a,c)
// GLOBAL Scope are different in a browser and in Node js +++

//SCOPE Level and HOISTING

function one(){
    const username = "functiontwo"

    function two(){//function inside of another
        const website = 'utube'
        console.log(username);
    }
    // 'console.log(website)' this satement is not going to run as the variable we are trying to call here is declared inside of another function and it is a 'local' scoped variable

    two()

    console.log('function one')
}
one()

// ++++++++++++++++++++ interesting +++++++++++++++++

function addOne(num){
    return num + 1
}

console.log(addOne(5))

// 'addTwo(5)' If we declare this above the function it won't execute. Beacause of hoisting
const addTwo = function(num){// here we have stored the value of function in a variable
    return num + 2
}
 
console.log(addTwo(5))
