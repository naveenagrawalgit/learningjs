let mydate = new Date ()
console.log(mydate.toString())// gives current date and time
console.log(mydate.toDateString() ) // gives 'only' current date with day
console.log(mydate.toLocaleDateString())//gives only date
console.log(mydate.toLocaleString()) // gives date with time 'locale' 

// *************to declare own date*****/
let myOwnDate = new Date(2023,1,23)
console.log(myOwnDate.toDateString()) // month starts from '0' in js. But if we do(dd-mm-yyyy) then month will start from '1'