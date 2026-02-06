//for of loop> is used to loop through the values of an iterable object like arrys
/**
 * Array ya iterable ke values par loop chalata hai

Ye direct value deta hai, index nahi
 */

let arr = [10, 20, 3, 49, 9];
for (let value of arr) {
  console.log(value);
}

let fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
  console.log(fruit);
}
/**
 * let user = { name: "Ali", age: 25, city: "Lahore" };

// ❌ ye kaam nahi karega
for (let value of user) {
  console.log(value);
}
⚠️ Objects directly iterable nahi hote,
for...of sirf arrays, strings, maps, sets ke liye kaam karta hai.let user = { name: "Ali", age: 25, city: "Lahore" };

// ❌ ye kaam nahi karega
for (let value of user) {
  console.log(value);
}
⚠️ Objects directly iterable nahi hote,
for...of sirf arrays, strings, maps, sets ke liye kaam karta hai.
Object ke liye for...in use karna hota hai.
 */

//example 2
let cart = [
  { name: "mobile", price: 20000 },
  { name: "laptop", price: 800 },
  { name: "mouse", price: 700 },
];

for (let item of cart) {
  let values = `${item.name} costs ${item.price}`;
  console.log(values);
}

// example 3

let str = "HELLO";
for (let item of str) {
  console.log(item);
}
