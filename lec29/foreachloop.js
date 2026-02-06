// foreach > forEach() method executes a provided function once for each array element.
/**forEach() array ke har element par ek-ek baar chalta hai
lekin kuch return nahi karta.

👉 Sirf kaam karne ke liye hota hai (print, update, log, sum etc.) 

array.forEach((item, index) => {
  // kaam
});
*/

let arr = [10, 20, 30, 40, 50, 60, 70];
let len = arr.length;
for (let i = 0; i < len; i++) {
  console.log(arr[i]);
}

arr.forEach((item) => {
  console.log(item);
});

// example 2
let users = [
  { name: "ali", age: 20 },
  { name: "raza", age: 25 },
];

users.forEach((user) => {
  console.log(`${user.name} is ${user.age} years old`);
});

// example 3
let prices = [100, 200, 300];
let total = 0;
prices.forEach((price) => {
  total = total + price;

  console.log(total);
});

// example 4
let cart = [
  { name: "mobile", price: 20000 },
  { name: "laptop", price: 800 },
  { name: "mouse", price: 700 },
  { name: "keyboard", price: 1500 },
];
// let totalValue = 0;
// cart.forEach((item) => {
//   totalValue = totalValue + item.price;
//   console.log("total values is ", totalValue);
// });
let t = 0;
let newCart = cart
  .filter((item) => {
    newPrice = item.price > 1000;
    return newPrice;
  })
  .forEach((item) => {
    t += item.price;
    console.log("fintal totle", t);
  });
