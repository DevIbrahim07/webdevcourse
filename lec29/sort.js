// sort > to sort the elements of an array in place and return the sorted array
//JavaScript ka sort() by default values ko STRING samajh kar sort karta hai, chahe wo numbers hi kyun na hon.

/*(a, b) => a - b
agar result negative → a pehle aayega

agar result positive → b pehle aayega

agar 0 → koi change nahi */

let sortArray = [3, 5, 6, 2, 8, 20, 9, 1, 5];
console.log(sortArray.sort());

let sortedArray = sortArray.sort((a, b) => a - b); //ascending order
console.log(sortedArray);

let descOrderArray = sortArray.sort((a, b) => b - a); //descending order
console.log(descOrderArray);

// example 2

let products = [
  { title: "laptop", price: 50000 },
  { title: "mouse", price: 800 },
  { title: "keyboard", price: 1500 },
];

products.sort((a, b) => a.price - b.price);
console.log(products);

// example 3
let students = [
  { name: "ali", marks: 60 },
  { name: "zara", marks: 90 },
  { name: "usama", marks: 75 },
];

let n = students
  .sort((a, b) => b.marks - a.marks)
  .filter((students) => {
    return students.name.startsWith("a");
  });
console.log(n);
