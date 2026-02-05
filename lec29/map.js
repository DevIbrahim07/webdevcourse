//map() hamesha same length ka naya array return karta hai
//aur har item se ek naya item banata hai
// map function> is used to create a new array by applying a function to each element of an existing array
// basically hamre pass kch existing values hai
// un pr hm specific function apply krna chahte hai to uske liye hm map funtion use krege
let mapArray = [1, 2, 3, 4, 5, 6];
let mappedArray = mapArray.map((number) => {
  return number * 2;
});
console.log(mappedArray);

let mapArray2 = ["ali", "ahmed", "khan"];
let mappedArray2 = mapArray2.map((name, index) => {
  name.toUpperCase();
  return `my name is ${name} and my index is ${index}`;
});
console.log(mappedArray2);

let newMapArray = [
  "ali",
  "raza",
  2,
  3,
  50,
  "heloo",
  true,
  function (a, b) {
    return a + b;
  },
];
// array mai se function ko call krna
// console.log(newMapArray[7](2, 3));

let newMappedArray = newMapArray.map((data) => {
  if (typeof data === "string") {
    const capital = data.toUpperCase();
    return capital;
  }
  if (typeof data === "number") {
    const double = data * 2;
    return double;
  }
  if (typeof data === "function") {
    return data(5, 10);
  }
  if (typeof data === "boolean") {
    return !data;
  }
});
console.log("this is new map example", newMappedArray);

// example 2
let employees = [
  { name: "ali", age: 5, student: true },
  { name: "raza", age: 23, student: false },
  { name: "usama", age: 28, student: true },
  { name: "hassan", age: 22, student: false },
];

let empMap = employees.map((item) => {
  return {
    name: item.name.toUpperCase(),
    age: item.age >= 18 ? "Adult" : "Young",
  };
});
console.log(empMap);

// example 3
let products = [
  { title: "laptop", price: 50000 },
  { title: "mouse", price: 800 },
  { title: "keyboard", price: 1500 },
];

let pMap = products.map((item) => {
  return {
    title: item.title.toUpperCase(),
    price: item.price * 1.2, // ye 20% tax add krde ga
  };
});
console.log(pMap);
