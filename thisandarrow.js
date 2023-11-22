// 'this' contains the global execution context. value of 'this in browser is 'WINDOW'

const user = { // 'this' refers to the current context
    username : 'hitesh',
    price : 999,

welcomeMessage: function()
{
    console.log(`${this.username} , welcome to website`)
    console.log(this);// prints tbe context of function.
}
}

user.welcomeMessage() 
user.username = 'sam'
user.welcomeMessage()// here we have cahnged the context

function chai(){
    // console.log(this);
 }
 chai()

// ++++++++ Arrow Function ++++++++++++
// Syntax

const cahi = () => { // Instead of using 'Function' keyword we use  ' = () => ' and we can declare paremter in '()'
}

const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(3,4))

// const addTwo = (num1,num2) => (num1 + num2)  ++++++++ In this way we don't even have to write 'return' keyword

// WHEN we don't use return Keyword it is an IMPLICIT return and 'EXPLICIT' when 'return' is used
