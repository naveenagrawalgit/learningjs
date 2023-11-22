/*
^ Global execution
^ Function execution context
^Eval Execution Context
there are two phases

1 - Global Execution

1 - Memory creation phase = In memory phase all 'variables' are collected and stored

3 - Execution phase 
*/

//+++++++++++++ ARRAY AND LOOPS ++++++++++++

// FOR OF loop

const ar = [1,2,3,5,63,4,8,9]

for (const iterator of ar) { // here 'ITERATOR' means the variable which is going to be used as the times the loop is going to run

    // and 'OBJECT' means on which thing loop is going to get applied. IT is not same as 'OBJECTS' 
}
 

for (const i of ar) {
    // console.log(i); // the loop runs or iterates to the amount of elements inside of the array.
}

let name = 'a for apple'

for (const j of name) {

    if (j == 'f'){
        break
    }
    //console.log(`ITERATING with a string ${j}`);
}

//MAPS

const map =  new  Map() // 'Map' holds 'KEY-VALUE' pair and remembers their order
map.set('IN','INDIA')
map.set('UK','UTTRA KHAND')
map.set('FR','FRANCE')
map.set('IN','INDIA') // only uniquw values are allowed

//console.log(map);

for (const [key, value] of map) {

    console.log(key , ' : ', value);
}

// const myObj ={
//     'game' : 'nfs',
//     'game1' : 'nab',
//     'game3' : 'ban'
// }
// for (const [key, value] of myObj) {
//     console.log(key , value);
// }

/*
^ objects are not ITERBALE by 'forof' . 'MAPS' are iterable by 'forof loop
*/

// FOR IN loop 'used fro objects'

const myObj ={
        game : 'nfs',
        game1 : 'nab',
        game3 : 'ban'
    }

    for (const key in myObj) {
       console.log(key,myObj[key]);
    } 

    const ar1 = [1,2,3,5,63,4,8,9]

    for (const key in ar1) {
      console.log(ar1[key]); // iterating array
    }
    // for in doesn't works on 'map'  cause it is not iterable

    // ++++++++++ FOR EACH ++++++++++ 'mostly used for iterating arrays

    ar1.forEach((item, index , array) =>{
        console.log(item,index,array);
    })

    const obj2 = [ // array conataining objects
        {
            game : 'nfs',
            game1 : 'nab',
            game3 : 'ban'
        },
        {
            game : 'nfsw',
            game1 : 'nabi',
            game3 : 'bane'
        }
    ]// iterating objects in an array

    obj2.forEach((item) => {
        console.log(item.game);// accessing key value pairs inside of an 'object' which are inside of an 'array'

    })