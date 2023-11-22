 const marvel = ["thor", "Ironman", "spider"] 
 const dc = ['gerv','evsrv','rgsr']
 marvel.push(dc) // this becomes array inside array
 console.log(marvel) // Arrays can take anytype of data . Here we pushed the 'dc' in 'marvel'
 console.log(marvel[3][2])// in first brackets we gave index where another array is present and second 

 const marvel1 = ["thor", "Ironman", "spider"] 
 const dc1 = ['gerv','evsrv','rgsr']

 let arnew = marvel1.concat(dc)
 console.log(arnew) // concat takes two arrays and returns a new array after concatinating  

 const ar2 = [...marvel1 , ...dc1] // here we are using spread operator
 console.log(ar2)

 const ar3 = [1,2,4,2[4,532,6,7],2,78,[5,23,[65,6],43 ] ] // here there is an array inside of another array

// we are using 'flat' method to flatten the array . It simply removes all the subarrays and converts it into a single array
 const newar3 = ar3.flat(Infinity)
 console.log(newar3)

 console.log(Array.isArray('hitesh')) // checking whether it is an array or not
 
 console.log(Array.from('hitesh')) // by using from we created string 'hitesh' as an array
 console.log(Array.from({name : "hitesh"})) // a key value pair from an object **imp for interview

 let v1 = 453
 let v2 = 126
 let v3 = 529

 console.log(Array.of(v1,v2,v3)) // here we created an array from variables with 'of' method