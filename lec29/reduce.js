// reduce > is used to reduce the array to single value
// ye array ke sare elements pr ek function apply krta hai
// aur ek single value return krta hai
// ye function array ke har element pr chalta hai
// aur ek accumulator value maintain krta hai
// jo ki previous iteration ka result hota hai

//Socho tumhare paas fruits ka basket 🍎🍌🍊
//Aur tumhe total weight ya sabko ek string mein jodna hai.
//Ye kaam reduce() karta hai.

/*
array.reduce((accumulator, currentValue) => {
    // logic
}, initialValue);
accumulator → jo value accumulate ho rahi hai (total, string, object)

currentValue → array ka current item

initialValue → starting value (optional, lekin recommended)

*/
/*
let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // 15
🔹 Step by Step
total = 0 (initial)

total = 0 + 1 → 1

total = 1 + 2 → 3

total = 3 + 3 → 6

total = 6 + 4 → 10

total = 10 + 5 → 15 ✅
*/

let reduceArray = [1, 2, 3, 4, 5, 6];

let reduceV = reduceArray.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(reduceV);

// example 2
// let words = ["helo", "world", "this"];
// let reduceWords = words.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);
// console.log(reduceWords);
let words = ["helo", "world", "this"];
let reduceWords = words.reduce((acc, curr) => {
  return acc + " " + curr;
});
console.log(reduceWords);

// example 3
let products = [
  { title: "laptop", price: 50000 },
  { title: "mouse", price: 800 },
  { title: "keyboard", price: 1500 },
];

let totalPrice = products.reduce((acc, curr) => {
  return acc + curr.price;
}, 0);
console.log(totalPrice);
// let totalPrice = products.reduce((acc, curr) => {
//   return acc + curr.price;
// });
// console.log(totalPrice);

// example 4
let orders = [
  { id: 1, customer: "ali", amount: 1200, paid: true },
  { id: 2, customer: "raza", amount: 500, paid: false },
  { id: 3, customer: "usama", amount: 3000, paid: true },
  { id: 4, customer: "hassan", amount: 700, paid: true },
  { id: 5, customer: "amna", amount: 200, paid: false },
];
let totalOfPaidOrders = orders.reduce((acc, curr) => {
  if (curr.paid) {
    return acc + curr.amount;
  }
  return acc;
}, 0);
console.log(totalOfPaidOrders);
