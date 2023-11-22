// Immediately Invoked Function Expressions

/*

^ IIFE is used to run a function Immediately. and for avoid Global scope related data ( Globael scope polllution )

*/
(function chai(){
    // named IIFE as function has a name 'chai'
    console.log('DB connected');
})(); //IIFE doesn't know when to stop a function so a ';' is needed to stop its execution

// In this we are going to use 2 ' () () ' 1st one is for Definition of function.  and 2nd is for execution of function.

((name) => { // unNAMED IIFE function
    console.log(`DB Connected two ${name}`);
}) ('hitrsh') // ARROW functions can be also be used as IIFE 