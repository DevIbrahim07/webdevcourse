// ///////////////////////object cloninig?>
// run time pr object ki properties chagne kr skte ahi is liye ise dynamic in nature hote hai
// //////////////////////shallow copy >
// If the original object contains nested objects or arrays,
// the copy will hold references to those same nested objects in memory.
// Modifying a nested property in the copy will also mutate the original object and vice versa.
// is ka mtlb he aik object ki properties ko aik naye object mai copy krna lekin agar objec mai
// nested object ho to wo reference copy hota he us ka
// //////////////////vs deep copy
// deep copy ka mtlb ha aik object ki properties ko aik naye object mai copy krna including nested objects.
// The original and the copy are entirely independent. Changes to the copied object, no matter how deep the nesting, will not affect the original object.
//Modifying a nested property in the copy will not affect the original object and vice versa.
// ///////////////////////ways to clone object
// obj cloninge can be done using spread operator,
let a = {
  name: "John",
};
let b = a;
console.log(a,b);//  reference copy . aik object k pass do refrence a jate hai.  object ka address copy hota hai objeect ka data nhi hota hai. is case mai aikhi object ko dono variable point out kr rahe hai

// //////////////////////using spread operator

let c = { ...a };
a.name = "Smith";
console.log(a,c ); // different object ban jata hai. dono alag alag object hota hai
a.name = "Doe";
console.log(a);

let user = {
  name: "h",
  age: 30,
};
let cloneUser = { ...user };

console.log("cloned object", cloneUser, cloneUser.name);


//////////////////////////using assign method
let user2 = {
  name: "hello",
    age: 25,
};
let cloneUser2 = Object.assign({}, user2);
console.log("cloned object using assign", cloneUser2);


//example 2

let ob1 = {
    name: "Alice",
    age:33
}
let ob2= {
    weight: 70,
    height: 170
}
let ob3 = Object.assign({}, ob1 , ob2);
console.log(ob3);

///////////////using iteration 
let original = {
    name: "Bob",
    age: 28
}
let cloneObj = {};
for (let key in original) {
    cloneObj[key] = original[key];
}
console.log("cloned object using iteration", cloneObj);

// ///////////////////////deep cloning
// using JSON methods
let originalObj = {
    name: "Charlie",
    age: 35,
    address: {
        city: "New York", 
        zip: 10001
    }
};
let deepClonedObj = JSON.parse(JSON.stringify(originalObj));
originalObj.address.city = "Los Angeles";
console.log("original object after modification", originalObj);
console.log("deep cloned object", deepClonedObj);