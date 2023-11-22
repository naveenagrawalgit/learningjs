console.log("2"> 1);
console.log("02"> 1);

//   in this the js automatically converted string in number and compared.
//   Type script doesn't allows this type of comparisons.
console.log(null > 0);
console.log(null == 0);// '==' this is stated as equality check which is checking both are equal or not and which they are not.
console.log(null >= 0);

/*
 ^ As we run above code we see that first 2 conditions are false but 3rd condition is true.
 ^ this is beacause of the way the comparison operaters works.
 ^ the comparison converts the 'null' into '0'.
 ^ null becomes '0' if we use it with comparison operators
 */

console.log("2" == 2);//  true
console.log("2" === 2);// false :- because '===' stated as(strict check) compares datatypes also as these both are different.
