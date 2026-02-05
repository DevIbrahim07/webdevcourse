//  reference types arrays, objects , funciton
// arrays is a collection of items
// creation of array
// using [] , array constructor
let arr = [1, 2, 3, 4, 5];
console.log(arr);
// array constructor
let ar = new Array(1, 2, "helo");
console.log(ar);
console.log(typeof arr, typeof ar);
// acces array elements
console.log(arr[0]);

console.log(ar[2]);

// built in methods in array
// length, push , pop , unshift, shift , find,
// reduce, slice, splice, indexof,  lastindexof,
// map, filter, foreach,

// length> to find lenght of array
let lenOfArray = [1, 2, 3, 4, 5, "helo", 7, "world"];
console.log(lenOfArray.length);
// index of to find index of element
console.log(lenOfArray.indexOf(3));
console.log(lenOfArray.indexOf("helo"));

// push> is use ot insert any elemnet at the end of array
let array = [3, 4, 5, "dummy"];
console.log(array);
array.push("data");
console.log(array);

// unshift> is use to insert element at the start of array
let unshiftArray = [2, 3, 4, 5];
console.log(unshiftArray);
unshiftArray.unshift("insert at the start");
console.log(unshiftArray);
// pop>is used to remove element from the last in array
let popArray = [2, 3, 4, 5, 6, 7, 8];
console.log("pop array", popArray);
popArray.pop();
console.log(popArray);
popArray.pop(1); // it will remove last element only
console.log(popArray);
// shift> is used to remove element at the beginning of array
let shiftArray = [
  function () {
    console.log("he");
  },
  "helo ",
  2,
  4,
  6,
  8,
  "world",
];
console.log("before", shiftArray);
shiftArray.shift();
console.log("after", shiftArray);

// slice > is used to extract a portion of an array
// and return a new array . mean slice(starting index , excluded ending index)
//starting index ko include kre ga and ending index ko exlculde kre ga
let sliceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sliceArray);
let newSliceArray = sliceArray.slice(3, 6);
console.log("new sliced array", newSliceArray);

// splice > is used to add or remove elements from an array
// splice(starting index, number of elements to remove , elements to add)basically ya
//modify krta he origional array ko
// is method kthrough hm array ka content kochange krskte hai
//us mai insert / replace / remove krskte hai
// let spliceArray = [1, 2, 3, 4, 5, , , 6, 7, 4];
let spliceArray = [1, 2, 3, 4, 5, 6, 7, 4];
console.log(spliceArray);
//spliceArray.splice(2, 5, "ali");
// yaha pr index 2 se start ho ga 5 tak remove ho ga and "ali" ko include kr de ga
console.log(spliceArray);
// acha agr koi element ko insert krna ho bina remove kiye to uske liye hm 0 likhenge
spliceArray.splice(2, 0, "newdata");
console.log(spliceArray);

//map()	                             //filter()
//Har item ko change karta hai	     Sirf kuch items select karta hai
//Length same rehti hai	             Length kam ya zyada ho sakti hai
//return = new value	             return = true / false
