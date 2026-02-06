// find> find() array ke andar se sirf pehla element return karta hai
//jo condition true kare.

//👉 Agar kuch na mile → undefined

let findArray = [1, 2, 3, 4, 5, 6, 7];
let fArray = findArray.find((number) => {
  return number % 2 === 0;
});
console.log(fArray);

// Example 2
let users = [
  { userId: 1, userName: "harshit" },
  { userId: 2, userName: "mohit" },
  { userId: 3, userName: "nitish" },
  { userId: 4, userName: "ankit" },
];
let user = users.find((user) => {
  return user.userId === 3;
});
console.log(user);

// example 3
let products = [
  { name: "mobile", price: 20000 },
  { name: "laptop", price: 80000 },
  { name: "mouse", price: 700 },
];
let product = products.find((item) => {
  return item.price > 50000;
});

console.log(product);
