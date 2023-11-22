//stack(primitive / deep copies) actual refrence is not provided  ##||## heap (Non-Primitive / shallow copies) actual refrence is provided

let var1 = "a basic string";
console.log(var1);

let var2 = var1;
console.log(var2);


var2 = "edit on myYoutubename";
console.log(var1);
console.log(var2);

/*
above we copied value from (var1) and stored it in (var2) after that we again stored another value in (var2) as outcome the value in (var2) changed and the value in (var1) stayed the same cause we copied the value.
THIS IS STORED IN STACK MEMORY.
*/

let user1 ={     // object
    name : "blank",
    srno : 1,
}
console.log(user1.name) // before changing data in (user1)

let user2 = user1

user2.name = "changed"
console.log(typeof(user2))

console.log(user1.name)// after changing the value
console.log(user2.name)
user1.name = 'anotherchange'
console.log(user1.name)
console.log(user2.name)

// in non primitive data is stored in heap which works with refrencing means you get refrence of original value .If someone with refrence changes  the value ,the actual value gets changed
/*
 ^ Above (user2) with refrence changed the value of 'name' in (user1)
*/