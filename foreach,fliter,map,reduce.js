// ++++++++++++++++++ FILTER ++++++++++++++
const num = [1,2,3,4,5,6,7,8,9]

const fl = num.filter ((num)=> num >5)
console.log(fl)//without'{}'

const f = num.filter ((num)=>
{ //explicit return
   return num > 4 // if you use '{}' instead of '()' then you have to use return keyword  
})

console.log(f);

// FILTER has a call back function . In which each value can be accessd.

const newnum = []
num.forEach((num) =>{ //making subarray with foreach.
   if (num > 3){

      newnum.push(num)
   }
})
const books = [
   { title: 'Book One', genre: 
   'Fiction', publish: 1981, edition: 2004 },
   { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
   { title: 'Book Three', genre: 
   'History', publish: 1999, edition: 2007 },
   { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
   { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
   { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
   { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
   { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
   { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
 ];

const ref = books.filter((bk)=> bk.genre)

console.log(ref);

let ref2 = books.filter((bk)=> (
    bk.genre === 'Fiction' // here we checked the genre as if the genre matched with provided string , the answer comes on screen
))
console.log(ref2);
  ref2 = books.filter((bk)=> {
   return bk.publish >= 1995 && bk.genre === 'History'})
   console.log(ref2);

   // MAP is pretty similar as filter