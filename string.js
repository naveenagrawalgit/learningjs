// STRINGS.
const name = "finnest"
const roll = 12;
console.log(`text1. varaibale1 :- ${name}.    \n variable2 :- ${roll} `)
// NOW we use string interpolation . With this we can insert variables also in between strings.
// it makes it more managable.
 
const gameName = new String('fineest_of_planet') // here we declared string as an object. and every single letter in string has a key by which it can be accessed

console.log(gameName[0]); // accsessing key of string object and printing its value which is stored in it.
console.log(gameName.charAt(4)) //2nd O/P.
console.log(gameName.indexOf('f'))//3rd O/P.
console.log(gameName.toUpperCase())// 4th O/P.
console.log(gameName.charAt(3))//displays the character stored at the provided index.
console.log(gameName.indexOf('e'))//displays the index(key) of the character.

/* 
THERE ARE METHODS FOR CREATING MORE STRINGS(sub strings) from the already existing array
*/
const string2 = gameName.substring(0,4)
console.log(`string2:- ${string2}`)
// in this I created a new substring from orignal string.and also gave index value to determine the values I want to get stored in new string

const string3 = gameName.slice(-8,-3)
console.log(`string3:- ${string3}`)// with slice we can start from right side of the string also by using (-ve) sign.

const url = 'https://nigesh.com/ nigesh%/ aphreekan'
console.log(url.replace('%','P'))// used to replace a word present in the string.