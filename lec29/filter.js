// filter function > is used to create a new array with all elements
// that pass test implemented by provided funcition simply
// filter out on specific condition (kise element ko include krna hai
// aur kise exclude krna hai)
// filter() array ke andar se sirf woh items nikalta hai
//jo tumhari condition ko TRUE karein.

//👉 Jo true → naye array mein aa jata hai
//👉 Jo false → bahar reh jata hai

let fArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, true, false, "helo"];

let filterArray = fArray.filter((data) => {
  const even = data % 2 === 0;
  return even;
});
console.log(filterArray);

// example 2
let products = [
  { title: "laptop", price: 50000 },
  { title: "mouse", price: 800 },
  { title: "keyboard", price: 1500 },
];

let filterProduct = products.filter((item) => {
  return item.price < 1000;
});
console.log(filterProduct);

// example 3
let result = products
  .filter((item) => item.price > 1000)
  .map((item) => item.title.toUpperCase());

console.log(result);

// example 4
let user = [
  { name: "ali", age: 5, student: true },
  { name: "raza", age: 23, student: false },
  { name: "usama", age: 28, student: true },
  { name: "hassan", age: 22, student: false },
];

let fUser = user
  .filter((item) => {
    return item.age >= 18;
  })
  .map((item) => item.name.toUpperCase());

console.log(fUser);

// example 5

let orders = [
  { id: 1, customer: "ali", amount: 1200, paid: true },
  { id: 2, customer: "raza", amount: 500, paid: false },
  { id: 3, customer: "usama", amount: 3000, paid: true },
  { id: 4, customer: "hassan", amount: 700, paid: true },
  { id: 5, customer: "amna", amount: 200, paid: false },
];

let orderP = orders
  .filter((item) => {
    return item.paid === true && item.amount > 1000;
  })
  .map((item) => 
    `${item.customer.toUpperCase()} - Rs ${item.amount}`
  );
  if(orderP.length === 0) orderP = ["No valid orders"];
console.log(orderP);
